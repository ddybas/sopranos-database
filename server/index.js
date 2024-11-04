const express = require("express")
const app = express();
const cors = require("cors")
const pool = require("./db")

app.use(cors());
app.use(express.json()); //req.body

// ROUTES

// CREATE AN EPISODE

app.post("/episodes", async (req, res) => {
    try {
        const { season } = req.body;
        const { episode } = req.body;
        const { title } = req.body;
        const { director } = req.body;
        const { writer } = req.body;
        const { airdate } = req.body;
        const { viewers } = req.body;
        const { synopsis } = req.body;
        const { image } = req.body;
        const newEpisode = await pool.query(
            "INSERT INTO episodes (season, episode, title, director, writer, airdate, viewers, synopsis, image) VALUES($1, $2, $3, $4, $5, $6, $7,$8, $9) RETURNING *",
            [season, episode, title, director, writer, airdate, viewers, synopsis, image]
        );
        res.json(newEpisode.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// GET ALL EPISODES

app.get("/episodes", async (req, res) => {
    try {
        const allEpisodes = await pool.query("SELECT * FROM episodes");
        res.json(allEpisodes.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// GET A SEASON


// GET AN EPISODE

app.get("/episodes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const episode = await pool.query("SELECT * FROM episodes WHERE episodes_id = $1", [id])

        res.json(episode.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE AN EPISODE

app.put("/episodes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { season } = req.body;
        const { episode } = req.body;
        const { title } = req.body;
        const { director } = req.body;
        const { writer } = req.body;
        const { airdate } = req.body;
        const { viewers } = req.body;
        const { synopsis } = req.body;
        const { image } = req.body;
        const updateEpisode = await pool.query(
            "UPDATE episodes SET season = $1, episode = $2, title = $3, director = $4, writer = $5, airdate = $6, viewers = $7, synopsis = $8, image = $9 WHERE episodes_id = $10",
            [season, episode, title, director, writer, airdate, viewers, synopsis, image, id]
        );

        res.json("Episode updated successfully!")
    } catch (err) {
        console.error(err.message)
    }
})

// DELETE AN EPISODE

app.delete("/episodes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM episodes WHERE episodes_id = $1", [id]);
        res.json("Episode was deleted!");
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

