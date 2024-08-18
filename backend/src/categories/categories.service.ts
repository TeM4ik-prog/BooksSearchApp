import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createCategories(categories: string[]) {
    const values = categories
      .map((name) => `('${name.replace(/'/g, "''")}')`)
      .join(', ');

    const query = `
      INSERT INTO "Category" (name)
      VALUES ${values}
      ON CONFLICT (name) DO NOTHING;
    `;

    await this.databaseService.$executeRawUnsafe(query);
  }

  async getOrCreateUncategorizedCategory() {
    const existingCategory = await this.databaseService.category.findUnique({
      where: { name: 'No category' },
    });

    if (existingCategory) {
      return existingCategory;
    }

    return this.databaseService.category.create({
      data: { name: 'No category' },
    });
  }

  async getAllCategories() {
    return this.databaseService.category.findMany();
  }
}
