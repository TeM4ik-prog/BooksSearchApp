import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, CategoriesService],
  exports: [BooksModule]
})
export class BooksModule { }
