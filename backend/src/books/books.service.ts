import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class BooksService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createBookDto: Prisma.BookCreateInput[]) {
    try {
      const createPromises = createBookDto.map(book =>
        this.databaseService.book.create({
          data: book,
        })
      );

      return await Promise.all(createPromises);
    } catch (error) {
      console.error('Error creating books:', error);
      throw error;
    }
  }


  async findAll(query) {
    const { queryParams, page = 1, limit = 15, ...otherQueryParams } = query;
    console.log(queryParams)
    let where: any = { ...otherQueryParams };

    if (queryParams) {
      const { title, author, category, publisher, minPages, maxPages } = JSON.parse(queryParams);


      if (title) {
        where.title = {
          contains: title,
          mode: 'insensitive',
        }
      }

      if (author) {
        where.author = {
          contains: author,
          mode: 'insensitive',
        };
      }

      if (category) {
        where.category = {
          contains: category,
          mode: 'insensitive',
        };
      }

      if (publisher) {
        where.publisher = {
          contains: publisher,
          mode: 'insensitive',
        };
      }

      if (minPages || maxPages) {
        where.pageCount = {};
        if (minPages) {
          where.pageCount.gte = parseInt(minPages, 10);
        }
        if (maxPages) {
          where.pageCount.lte = parseInt(maxPages, 10);
        }
      }
    }

    const take = parseInt(limit, 10) || 15;
    const skip = ((parseInt(page, 10) || 1) - 1) * take;

    console.log(where)

    const books = await this.databaseService.book.findMany({
      where: where,
      take,
      skip,
    });

    return books;
  }



}
