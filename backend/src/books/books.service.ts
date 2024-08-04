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


  async findAll() {

    return this.databaseService.book.findMany({
      take: 50
    })
  }



}
