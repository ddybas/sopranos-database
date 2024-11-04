CREATE DATABASE sopranos;

CREATE TABLE seasons (
    seasons_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE episodes (
    episodes_id SERIAL PRIMARY KEY,
    season VARCHAR(255),
    episode VARCHAR(255),
    title VARCHAR(255),
    director VARCHAR(255),
    writer VARCHAR(255),
    airdate DATE,
    viewers VARCHAR(255),
    synopsis TEXT,
    image VARCHAR(255)
);


CREATE TABLE characters

CREATE TABLE locations