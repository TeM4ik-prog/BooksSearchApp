import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';


@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async createCategories(@Body('categories') categories: string[]) {
    await this.categoriesService.createCategories(categories);
    return { message: 'Categories created successfully' };
  }

  @Get()
  async getAllCategories() {
    return this.categoriesService.getAllCategories();
  }
}
