import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto {
  title: string;
  authors: string[];
  publisher: string | null;
  description: string | null;
  industryIdentifiers: string;
  pageCount: number | null;
  category: string | null;
  averageRating: number | null;
  imageLink: string | null;
  language: string | null;
  publishedDate: string | null;
  infoLink: string | null;
  previewLink: string | null;
}

export class CreateBooksDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBookDto)
  books: CreateBookDto[];
}
