import { Body, Controller, Delete, Get, Post, Headers, Put } from "@nestjs/common";
import { BookService } from "src/books/books.service";

@Controller()
export class BookController {
    constructor (private readonly bookService: BookService) {}

    // Get All Books
    @Get("/books")
    getBooks(): object {
        return this.bookService.getBooks();
    }

    // Create new book
    @Post("/book")
    createBook(@Body("name") name: string, @Body("genre") genre: string, @Body("authorId") authorId: string, ): object {
        return this.bookService.createBook(name, genre, authorId);
    }

    // Delete a book
    @Delete("/book")
    deleteBook(@Headers("id") id: string): object {
        console.log({ id })
        return this.bookService.deleteBook(id);
    }

    // Update Book
    @Put("/book")
    updateBook(@Headers("bookId") id: string, @Body("name") name: string, @Body("genre") genre: string): object {
        return this.bookService.updateBook(id, name, genre);
    }

    // // Get Single Book
    // @Get("/book")
    // getBook(): { bookName: string} {
    //   return this.appService.getBook();
    // }
}