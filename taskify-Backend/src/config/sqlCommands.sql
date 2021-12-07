CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(25) NOT NULL,
    email VARCHAR(80) NOT NULL,
    password VARCHAR(30) NOT NULL,

);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(300) NOT NULL,
    user_id SERIAL NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);