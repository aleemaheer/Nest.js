import { Injectable } from "@nestjs/common";
import { authors } from "src/authors/authors.service";

@Injectable()
export class BookService {
    // Get All Books
    getBooks(): object {
        return books;
    }

    // Create a Book
    createBook(name: string, genre: string, authorId: string): object {
        let create = false;
        let id = Date.now().toString();
        for (let i = 0; i < authors.length; i++) {
            if (authors[i].id === authorId) {
                create = true;
                break;
            }
        }
        if (create) {
            let obj = { id, name, genre, authorId };
            books.push(obj);
            return obj;
        } else {
            return { message: "Sorry this author does not exist Hint: First create author and then create book"}
        }
    }

    // Delete Book
    deleteBook(id: string): object {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id == id) {
                books.splice(i, 1);
                return { message: "Successfully Removed" }
            }
        }
        return { message: "Book not found with this id" };
    }

    // Update Book
    updateBook(id: string, name: string, genre: string): object {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books[i].name = name;
                books[i].genre = genre;
                return books[i];
            }
        }
        return { message: "Book doesn't exist with this id" };
    }
}

export const books = [
    { id: "1", name: "The Earth", genre: "Planet", authorId: "3"},
    { id: "2", name: "The Sun", genre: "Stars", authorId: "1"},
    { id: "3", name: "The Moon", genre: "Space Planets", authorId: "2"},
]
