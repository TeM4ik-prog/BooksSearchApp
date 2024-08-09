import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { DatabaseModule } from 'src/database/database.module';
import { BooksModule } from 'src/books/books.module';
import { BooksController } from 'src/books/books.controller';
import { BooksService } from 'src/books/books.service';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [DatabaseModule, BooksModule], 
  controllers: [AuthorsController],
  providers: [AuthorsService, BooksService, CategoriesService],
})
export class AuthorsModule {}
