import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class BooksService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createBookDto: Prisma.BookCreateInput[]): Promise<{
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
