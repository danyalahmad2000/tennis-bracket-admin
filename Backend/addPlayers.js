const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = 18000;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS

// Configure Multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/players');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Configure the PostgreSQL client
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tennisBracketAdmin',
  password: '12345678',
  port: 5432,
});

// Handle database connection errors
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// POST endpoint to handle player submission
app.post('/add-player', upload.single('image'), async (req, res) => {
  const { name, level, titles, country } = req.body;
  const imagePath = req.file ? req.file.path : null;

  try {
    // Insert data into the database
    const client = await pool.connect();
    const query = `
      INSERT INTO players (name, level, titles, country, photo)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [name, level, titles, country, imagePath];
    await client.query(query, values);
    client.release();

    // Respond to the frontend
    res.status(200).json({ message: 'Player added successfully!' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ message: 'Failed to add player' });
  }
});


// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
