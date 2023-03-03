// // import express from "express";
// // import dotenv from "dotenv";
// // import Connection from "./database/db.js";
// // const app = express();
// // dotenv.config();

// // import cors from "cors";
// // app.use(express.json());

// // // routes;
// // import books from "./routes/books.js"

// // // Connect Database
// // // connectDB();

// // // cors
// // app.use(cors());
// // // Init Middleware
// // app.use(express.json({ extended: false }));

// // // use Routes
// // app.use("/", books);

// // const USERNAME = process.env.DB_CONNECT;
// // app.get("/", (req, res) => res.send("hello"));
// // Connection(USERNAME);
// // const port = process.env.PORT || 8000;
// // app.listen(port, () => console.log(`server is running on port ${port}`));



// const express = require('express');
// const connectDB = require('./config/db');

// const app = express();
// app.use(express.json({ extended: false }));

// const books = require("./routes/books") 
// app.use("/", books);
// // Connect Database
// connectDB();

// app.get('/', (req, res) => res.send('Hello world!'));

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//components
import Connection from "./database/db.js";
import Router from "./routes/book_route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const USERNAME = process.env.DB_CONNECT;

const PORT = process.env.PORT || 8000;
Connection(USERNAME);
app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);