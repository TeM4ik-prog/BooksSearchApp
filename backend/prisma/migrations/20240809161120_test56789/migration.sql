-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "industryIdentifiers" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "name" DROP NOT NULL;
