// // models/Book.js

// import mongoose from "mongoose";

// const BookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   isbn: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
//   published_date: {
//     type: Date,
//     required: false
//   },
//   publisher: {
//     type: String,
//     required: false
//   },
//   updated_date: {
//     type: Date,
//     default: Date.now,
//     required: false
//   },
// });

// const Book = mongoose.model("book", BookSchema);

// export default Book;




// models/Book.js
// const mongoose = require('mongoose');
// const BookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   isbn: {
//     type: String,
//     required: true
//   },
//   author: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String
//   },
//   published_date: {
//     type: Date
//   },
//   publisher: {
//     type: String
//   },
//   updated_date: {
//     type: Date,
//     default: Date.now
//   }
// });
// module.exports = Book = mongoose.model('book', BookSchema);

import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  published_date: {
    type: Date,
    
  },
  publisher: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now,
    required: true
  },
});

const book = mongoose.model("book", BookSchema);

export default book;
