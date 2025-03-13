-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "author" TEXT,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "reading_time" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "categories" TEXT[],

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id","locale")
);
