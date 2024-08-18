import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';

import { Prisma } from '@prisma/client';
import { CreateBookDto } from './dto/create-book-dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/saveBooksInDb')
  create(@Body() createBooksDto: CreateBookDto[]) {
    return this.booksService.create(createBooksDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.booksService.findAll(query);
  }
}
