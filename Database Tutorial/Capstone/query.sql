CREATE TABLE books (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	book_title VARCHAR (150) NOT NULL,
	book_cover VARCHAR (150) NOT NULL,
	comment TEXT
);

INSERT INTO books (name, book_title, book_cover, comment)
VALUES ('Billy', '48 Law of Power', 'https://covers.openlibrary.org/b/id/15254578-M.jpg', 'Good Book')