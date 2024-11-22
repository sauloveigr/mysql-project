const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

app.use(cors());
app.engine("handlebars", exphbs.engine()); // Update this line
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
});

app.use(
   express.urlencoded({
      extended: true,
   })
);

app.use(express.json());

app.get("/", (req, res) => {
   return res.json("Backend");
});

app.get("/users", (req, res) => {
   const query = "SELECT * FROM users;";
   connection.query(query, (err, data) => {
      if (err) {
         console.log("Error on query", err);
         res.status(500).json({ error: "Database query error" });
         return;
      }
      res.json(data);
   });
});

app.post("/users/register", async (req, res) => {
   const { password, email } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);

   const signupQuery = `INSERT INTO users (email, password) VALUES ('${email}', '${hashedPassword}')`;
   connection.query(signupQuery, (err, result) => {
      console.log("result", result);
      if (err) {
         return console.log({ err });
      }
      console.log("criado");
   });
});

app.post("/users/login", async (req, res) => {
   const { password, email } = req.body;

   const rows = await connection.query("SELECT * FROM users WHERE email = ?", [
      email,
   ]);
   const signupQuery = `SELECT * FROM users WHERE email = ?`;
   connection.query(signupQuery, (err, users) => {
      console.log({ users });
      if (err) {
         return console.log({ err });
      }
      console.log("criado");
   });
});

connection.connect(function (err) {
   if (err) {
      return console.log({ err });
   }
   console.log("Connected to MySQL database");

   app.listen(3031);
});
