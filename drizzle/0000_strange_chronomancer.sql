CREATE TABLE "blogs" (
	"id" varchar NOT NULL,
	"title" varchar NOT NULL,
	"date" timestamp NOT NULL,
	"author" varchar,
	"excerpt" text NOT NULL,
	"content" text NOT NULL,
	"cover_image" varchar NOT NULL,
	"reading_time" varchar NOT NULL,
	"locale" varchar NOT NULL,
	"categories" text[] NOT NULL,
	PRIMARY KEY ("id", "locale")
);
