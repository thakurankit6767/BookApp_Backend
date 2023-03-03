// // // routes/api/books.js

// // import express from "express";
// // const router = express.Router();

// // // Load Book model
// // import Book from "../models/Book.js";

// // // @route GET api/books/test
// // // @description tests books route
// // // @access Public
// // router.get("/test", (req, res) => res.send("book route testing!"));

// // // @route GET api/books
// // // @description Get all books
// // // @access Public
// // router.get("/books", (req, res) => {
// //   Book.find()
// //     .then((books) => res.json(books))
// //     .catch((err) => res.status(404).json({ nobooksfound: "No Books found" }));
// // });

// // // @route GET api/books/:id
// // // @description Get single book by id
// // // @access Public
// // router.get("/books/:id", (req, res) => {
// //   Book.findById(req.params.id)
// //     .then((book) => res.json(book))
// //     .catch((err) => res.status(404).json({ nobookfound: "No Book found" }));
// // });

// // // @route GET api/books
// // // @description add/save book
// // // @access Public
// // router.Book("/books", (req, res) => {
// //   Book.create(req.body)
// //     .then((book) => res.json({ msg: "Book added successfully" }))
// //     .catch((err) => res.status(400).json({ error: "Unable to add this book" }));
// // });

// // // @route GET api/books/:id
// // // @description Update book
// // // @access Public
// // router.put("/books/:id", (req, res) => {
// //   Book.findByIdAndUpdate(req.params.id, req.body)
// //     .then((book) => res.json({ msg: "Updated successfully" }))
// //     .catch((err) =>
// //       res.status(400).json({ error: "Unable to update the Database" })
// //     );
// // });

// // // @route GET api/books/:id
// // // @description Delete book by id
// // // @access Public
// // router.delete("/books/:id", (req, res) => {
// //   Book.findByIdAndRemove(req.params.id, req.body)
// //     .then((book) => res.json({ mgs: "Book entry deleted successfully" }))
// //     .catch((err) => res.status(404).json({ error: "No such a book" }));
// // });

// // export default router;

// // routes/api/books.js
// const express = require('express');
// const router = express.Router();
// // Load Book model
// const Book = require('../models/Book');
// // @route GET api/books/test
// // @description tests books route
// // @access Public
// router.get('/test', (req, res) => res.send('book route testing!'));
// // @route GET api/books
// // @description Get all books
// // @access Public
// router.get('/', (req, res) => {
//   Book.find()
//     .then(books => res.json(books))
//     .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
// });
// // @route GET api/books/:id
// // @description Get single book by id
// // @access Public
// router.get('/:id', (req, res) => {
//   Book.findById(req.params.id)
//     .then(book => res.json(book))
//     .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
// });
// // @route GET api/books
// // @description add/save book
// // @access Public
// router.Book('/', (req, res) => {
//   Book.create(req.body)
//     .then(book => res.json({ msg: 'Book added successfully' }))
//     .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
// });
// // @route GET api/books/:id
// // @description Update book
// // @access Public
// router.put('/:id', (req, res) => {
//   Book.findByIdAndUpdate(req.params.id, req.body)
//     .then(book => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });
// // @route GET api/books/:id
// // @description Delete book by id
// // @access Public
// router.delete('/:id', (req, res) => {
//   Book.findByIdAndRemove(req.params.id, req.body)
//     .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a book' }));
// });
// module.exports = router;

import express from "express";

import {
  createBook,
  updateBook,
  deleteBook,
  getBook,
  getAllBooks,
} from "../controller/book-controller.js";

const router = express.Router();

router.post("/create", createBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

router.get("/book/:id", getBook);
router.get("/books", getAllBooks);

export default router;
