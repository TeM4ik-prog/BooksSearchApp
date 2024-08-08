/*
  Warnings:

  - You are about to drop the column `publisher` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `_AuthorToBook` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToCategory` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `industryIdentifiers` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pageCount` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `language` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publishedDate` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_B_fkey";

-- DropForeignKey
ALTER TABLE "_BookToCategory" DROP CONSTRAINT "_BookToCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToCategory" DROP CONSTRAINT "_BookToCategory_B_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "publisher",
ADD COLUMN     "industryIdentifiers" TEXT NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "pageCount" SET NOT NULL,
ALTER COLUMN "language" SET NOT NULL,
ALTER COLUMN "publishedDate" SET NOT NULL;

-- DropTable
DROP TABLE "_AuthorToBook";

-- DropTable
DROP TABLE "_BookToCategory";

-- CreateTable
CREATE TABLE "BookAuthor" (
    "bookId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "BookAuthor_pkey" PRIMARY KEY ("bookId","authorId")
);

-- CreateTable
CREATE TABLE "BookCategory" (
    "bookId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "BookCategory_pkey" PRIMARY KEY ("bookId","categoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_name_key" ON "Author"("name");

-- AddForeignKey
ALTER TABLE "BookAuthor" ADD CONSTRAINT "BookAuthor_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookAuthor" ADD CONSTRAINT "BookAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookCategory" ADD CONSTRAINT "BookCategory_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookCategory" ADD CONSTRAINT "BookCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
