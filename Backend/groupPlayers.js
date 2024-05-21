const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 17000;

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

// Add the endpoint to fetch players from the database
app.get('/players', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT player_id, name, photo FROM players');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/tournaments', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT tournament_id, name FROM tournaments');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/groups', async (req, res) => {
    const { tournament_id, groups } = req.body;

    try {
        // Convert groups object to an array of group objects
        const groupsArray = Object.entries(groups).map(([groupName, players]) => ({
            group_name: groupName,
            players: players.map(player => ({
                name: player.name,
                player_id: player.player_id,
                photo: player.photo
            }))
        }));

        // Now groupsArray is iterable and can be looped over
        const insertedGroups = [];
        for (const group of groupsArray) {
            const { group_name, players } = group;
            // Insert the group into the groups table
            const groupResult = await pool.query(
                'INSERT INTO groups (group_name, tournament_id) VALUES ($1, $2) RETURNING *',
                [group_name, tournament_id]
            );

            const groupId = groupResult.rows[0].group_id;

            // Insert each player into the group_players table
            for (const player of players) {
                await pool.query(
                    'INSERT INTO group_players (group_id, player_id) VALUES ($1, $2)',
                    [groupId, player.player_id]
                );
            }

            // Push the inserted group data into the array
            insertedGroups.push({
                group_id: groupId,
                group_name: group_name,
                players: players
            });
        }

        // Send the inserted groups data back as a response
        res.status(200).json({ message: 'Groups added to tournament successfully', insertedGroups });
    } catch (error) {
        console.error('Error adding groups to tournament:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});