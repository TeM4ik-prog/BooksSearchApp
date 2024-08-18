-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "publishedAsOf" TEXT,
ADD COLUMN     "publisher" TEXT,
ADD COLUMN     "readingStatus" TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "language" DROP NOT NULL,
ALTER COLUMN "publishedDate" DROP NOT NULL;
