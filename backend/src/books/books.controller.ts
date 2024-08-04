import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';

import { Prisma } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post('/saveBooksInDb')
  create(@Body() createBooksDto: Prisma.BookCreateInput[]) {

    console.log(createBooksDto)
    return this.booksService.create(createBooksDto)
  }


  @Get()
  findAll() {
    return this.booksService.findAll();
  }

}
