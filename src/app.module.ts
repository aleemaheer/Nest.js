import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthorController } from './authors/authors.controller';
import { BookController } from './books/books.controller';
import { AppService } from './app.service';
import { AuthorService } from './authors/authors.service';
import { BookService } from './books/books.service';

@Module({
  imports: [],
  controllers: [AppController, AuthorController, BookController],
  providers: [AppService, AuthorService, BookService],
})
export class AppModule {}
