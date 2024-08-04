import { BooksService } from './books.service';
import { Prisma } from '@prisma/client';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBooksDto: Prisma.BookCreateInput[]): Promise<{
        id: number;
        title: string | null;
        authors: string[];
        publishedDate: string | null;
        publisher: string | null;
        pageCount: number | null;
        categories: string[];
        infoLink: string | null;
        imageLinks: Prisma.JsonValue | null;
    }[]>;
    findAll(): Promise<{
        id: number;
        title: string | null;
        authors: string[];
        publishedDate: string | null;
        publisher: string | null;
        pageCount: number | null;
        categories: string[];
        infoLink: string | null;
        imageLinks: Prisma.JsonValue | null;
    }[]>;
}
