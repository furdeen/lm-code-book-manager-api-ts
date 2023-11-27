import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

// User Story 3 - Delete All Books Solution
//export const deleteAllBooks = async () => {
//	return Book.destroy({
//		where: {},
//		truncate: true,
//	});
// }

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	return Book.create<Book>(book);
	
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};
// user story 5 - delete book by id solution
export const deleteBookById = async (bookId: number) => {

	return Book.findOne({
		where: { bookId },
	}).then((book) => {
		if (book) {
			return book.destroy();
		} else {
			return null;
		}

	});
	
};