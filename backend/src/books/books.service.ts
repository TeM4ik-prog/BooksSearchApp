import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateBookDto } from './dto/create-book-dto';
import { CategoriesService } from 'src/categories/categories.service';


@Injectable()
export class BooksService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly categoryService: CategoriesService
  ) { }

  async create(createBookDto: CreateBookDto[]) {
    console.log(createBookDto);
    try {
      const createPromises = createBookDto.map(async (book) => {
        const { authors, category, ...bookData } = book;
        const uncategorizedCategory = await this.categoryService.getOrCreateUncategorizedCategory();

        const authorRecords = await Promise.all(
          authors.map(name =>
            this.databaseService.author.upsert({
              where: { name },
              update: {},
              create: { name },
            })
          )
        );

        let categoryRecord = uncategorizedCategory;
        if (category) {
          categoryRecord = await this.databaseService.category.findUnique({
            where: { name: category },
          }) || uncategorizedCategory;
        }

        return this.databaseService.book.create({
          data: {
            ...bookData,
            authors: {
              create: authorRecords.map(author => ({ authorId: author.id })),
            },
            categories: categoryRecord ? {
              create: { categoryId: categoryRecord.id }
            } : undefined,
          },
        });
      });

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

    console.log(books)
    return books;
  }
}
