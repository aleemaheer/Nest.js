import { Body, Controller, Delete, Get, Post, Put, Headers } from "@nestjs/common";
import { AuthorService } from "src/authors/authors.service";

@Controller()
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

     // Get All Authors
    @Get("/authors")
    getAuthors(): object {
        return this.authorService.getAuthors();
    }

    // Create author
    @Post("/author")
    createAuthor(@Body("name") name: string, @Body("age") age: number): object {
        return this.authorService.createAuthor(name, age);
    }

    // Delete author
    @Delete("/author")
    deleteAuthor(@Body("id") id: string): object {
        return this.authorService.deleteAuthor(id);
    }

    // Update author
    @Put("/author")
    updateAuthor(@Headers("authorId") id: string, @Body("name") name: string, @Body("age") age: number): object {
        return this.authorService.updateAuthor(id, name, age);
    }

    // // Get Single Author
    // @Get("/author")
    // getAuthor(): { authorName: string} {
    //   return this.appService.getAuthor();
    // }
}