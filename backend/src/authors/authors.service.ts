import { Injectable } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthorsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly bookService: BooksService,
  ) {}

  findAll() {
    return this.databaseService.author.findMany();
  }

  async findOne(id: number) {
    const author = await this.databaseService.author.findUnique({
      where: { id },
    });

    const books = await this.bookService.findBooksWithDetails({
      where: {
        authors: {
          some: {
            authorId: id,
          },
        },
      },
    });

    return { books, author };
  }
}
