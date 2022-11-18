import { Injectable } from "@nestjs/common";
import { books } from 'src/books/books.service';

@Injectable()
export class AuthorService {
  // Get All Authors
  getAuthors(): object {
      return authors
  }

  // Create new author
  createAuthor(name: string, age: number): object {
    let id = Date.now().toString();
    let obj = { id, name, age};
    authors.push(obj);
    return obj;
  }

  // Delete author
  deleteAuthor(id: string): object {
    for (let i = 0; i < authors.length; i++) {
      if (authors[i].id !== id && i === authors.length -1) return { message: "Author not found"}
      if (authors[i].id === id) {
        for (let i = 0; i < books.length; i++) {
          if (books[i].authorId === id) {
            return { message: "Author can't be deleted, because his books are here. Hint: In order to delete any author, first delete the books written by the targetted author."};
          }
        }
        authors.splice(i, 1);
        return { message: "Author Successfully Deleted" }
      }
    }
  }

  // Update Author
  updateAuthor(id: string, name: string, age: number): object {
    for (let i = 0; i < authors.length; i++) {
      if (authors[i].id === id) {
        authors[i].name = name;
        authors[i].age = age;
        return authors[i];
      }
    }
    return { message: "Author doesn't exist with this id" };
  }
}

export const authors = [
    { id: "1", name: "Patrick", age: 22},
    { id: "2", name: "John", age: 25},
    { id: "3", name: "Tom", age: 34},
]
