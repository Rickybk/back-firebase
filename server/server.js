const PORT = process.env.PORT || 4000;
const express = require('express');
const app = express();
const pool = require('./db')


app.get('/time', async (req, res) => {
    try {
        const time = await pool.query('SELECT now()')
        res.json(time.rows)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, ( ) => console.log(`Express server listening on PORT ${PORT}`));
