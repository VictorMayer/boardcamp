import express from "express";
import chalk from "chalk";
import cors from "cors";
import pg from "pg";

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

const connectionData = {
    user: 'postgres',
    password: '123456',
    database: 'boardcamp',
    host: 'localhost',
    port: 5432
}

const connection = new pg.Pool(connectionData);

// ================ ROUTES ================ //

// categories:

app.post("/categories", async (req, res) => {
    try {
        const { name } = req.body;
        const isNameAvailable = await connection.query("SELECT * FROM categories WHERE name = $1", [name]);
        if(isNameAvailable.rows.length > 0) return res.sendStatus(409);
        if(name.lenght === 0) return res.sendStatus(400);
        await connection.query("INSERT INTO categories (name) VALUES ($1)", [name]);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get("/categories", async (req, res) => {
    try {
        const result = await connection.query(`SELECT * FROM categories`);
        res.send(result.rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// games:

app.post("/games", async (req, res) => {
    try {
        const { name, image, stockTotal, categoryId, pricePerDay } = req.body;
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get("/gams", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

// clientes:

app.post("/customers", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

app.put("/customers", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

app.get("/customers", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

app.get("/customers/:id", async (req, res) => {
    try {
         
    } catch (err) {
        console.log(err);
    }
});

// rentals:

app.post("/rentals", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

app.get("/rentals", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

app.post("/rentals/:id/return", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

app.delete("/rentals/:id", async (req, res) => {
    try { 

    } catch (err) {
        console.log(err);
    }
});

// turn server ON:

app.listen(port, () => {
    console.log("Server running on port: "+chalk.blue(port));
});