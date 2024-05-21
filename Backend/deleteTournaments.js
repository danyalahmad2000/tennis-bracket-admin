const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 10000;

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

app.get('/get-tournaments', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tournaments');
        res.json(rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/get-groups/:tournamentId', async (req, res) => {
    const tournamentId = req.params.tournamentId;

    try {
        const { rows } = await pool.query('SELECT * FROM groups WHERE tournament_id = $1', [tournamentId]);
        res.json(rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/get-players/:groupId', async (req, res) => {
    const groupId = req.params.groupId;

    try {
        const { rows } = await pool.query('SELECT p.name FROM players p INNER JOIN group_players gp ON p.player_id = gp.player_id WHERE gp.group_id = $1', [groupId]);
        res.json(rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/delete-tournament/:tournamentId', async (req, res) => {
    const tournamentId = req.params.tournamentId;

    try {
        // Check if there are any related records in the groups table
        const relatedGroups = await pool.query('SELECT * FROM groups WHERE tournament_id = $1', [tournamentId]);

        // If there are related groups, delete them first
        if (relatedGroups.rows.length > 0) {
            await pool.query('DELETE FROM group_players WHERE group_id IN (SELECT group_id FROM groups WHERE tournament_id = $1)', [tournamentId]);
            await pool.query('DELETE FROM groups WHERE tournament_id = $1', [tournamentId]);
        }

        // Then delete the tournament
        await pool.query('DELETE FROM tournaments WHERE tournament_id = $1', [tournamentId]);

        // Log deletion information
        console.log(`Deleted tournament with ID: ${tournamentId}`);

        // Send success response
        res.status(200).json({ message: `Tournament with ID ${tournamentId} deleted successfully` });
    } catch (error) {
        // Log error
        console.error('Error deleting tournament', error);
        // Send error response
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
