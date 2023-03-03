import Book from "../models/book-model.js";

export const createBook = async (request, response) => {
  try {
    const book = await new Book(request.body);
    book.save();

    response.status(200).json("Book saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updateBook = async (request, response) => {
  try {
    const book = await Book.findById(request.params.id);

    if (!book) {
      response.status(404).json({ msg: "Book not found" });
    }

    await Book.findByIdAndUpdate(request.params.id, { $set: request.body });

    response.status(200).json("Book updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deleteBook = async (request, response) => {
  try {
    const book = await Book.findById(request.params.id);

    await book.delete();

    response.status(200).json("Book deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getBook = async (request, response) => {
  try {
    const book = await Book.findById(request.params.id);

    response.status(200).json(book);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllBooks = async (request, response) => {

  try {
    const books = await Book.find({});

    response.status(200).json(books);
  } catch (error) {
    response.status(500).json(error);
  }
};
