/*
  Warnings:

  - You are about to drop the column `authors` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `categories` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `imageLinks` on the `books` table. All the data in the column will be lost.
  - Added the required column `category` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "authors",
DROP COLUMN "categories",
DROP COLUMN "imageLinks",
ADD COLUMN     "author" TEXT,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "imageLink" TEXT;
