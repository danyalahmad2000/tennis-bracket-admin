const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 16000;

app.use(bodyParser.json({ limit: '60mb' }));
app.use(cors())

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tennisBracketAdmin',
    password: '12345678',
    port: 5432,
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/tournaments');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/add-tournament', upload.array('images', 2), async (req, res) => {
    const { name, about, country, venues, timezone } = req.body;
    const imagePaths = req.files ? req.files.map(file => file.path) : [];

    try {
        const client = await pool.connect();
        const query = `
        INSERT INTO tournaments (name, about, tournament_pictures, country, venues, timezone)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
        const values = [name, about, imagePaths, country, venues, timezone];
        await client.query(query, values);
        client.release();

        res.status(200).json({ message: 'Tournament added successfully!' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Failed to add tournament' });
    }
});

app.get("/venues", async (req, res) => {
    try {
      // Query to select all venues from the database
      const query = "SELECT * FROM venues";
      const { rows } = await pool.query(query);
      console.log("Venues:", rows); // Log the rows
      res.json(rows);
    } catch (error) {
      console.error("Error fetching venues:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
