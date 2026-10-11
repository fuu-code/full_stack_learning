CREATE TABLE visited_countries_family (
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) UNIQUE NOT NULL,
	user_id INTEGER REFERENCES users(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  color VARCHAR(50)
);


INSERT INTO users (name, color)
VALUES ('Billy', 'yellow'), ('Jov', 'teal');

INSERT INTO visited_countries_family (country_code, user_id)
VALUES ('FR', 1), ('JP', 1), ('PH', 2), ('CN', 2);


SELECT *
FROM visited_countries_family AS v
JOIN users AS u
ON v.user_id = u.id


SELECT country_code 
FROM visited_countries_family v 
JOIN users u 
ON u.id = v.user_id
WHERE v.user_id = 1


SELECT country_code, name 
FROM visited_countries_family v 
JOIN users u 
ON u.id = v.user_id
WHERE v.user_id = 1