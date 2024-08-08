import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesService } from './categories/categories.service';
import { categories } from 'prisma/assets/categories';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    BooksModule,
    CategoriesModule,

    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CategoriesService],

})
export class AppModule implements OnModuleInit {
  constructor(private readonly categoriesService: CategoriesService,

    private readonly databaseService: DatabaseService
  ) { }



  private async createCategoriesOnInit() {
    await this.categoriesService.createCategories(categories)
  }


  async onModuleInit() {
    await this.createCategoriesOnInit();


    //полная очистка базы данных
    // await this.cleanDatabase()
  }

  async cleanDatabase() {
    await this.databaseService.bookAuthor.deleteMany({});
    await this.databaseService.bookCategory.deleteMany({});

    await this.databaseService.book.deleteMany({});
    await this.databaseService.author.deleteMany({});
    await this.databaseService.category.deleteMany({});
  }




}
