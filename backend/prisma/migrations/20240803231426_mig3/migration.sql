/*
  Warnings:

  - Added the required column `imageLinks` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "imageLinks" JSONB NOT NULL,
ALTER COLUMN "publishedDate" SET DATA TYPE TEXT;
