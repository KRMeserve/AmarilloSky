# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


CREATE TABLE users (id SERIAL, username VARCHAR(20), password VARCHAR(100), admin BOOLEAN);
INSERT INTO users (username, password, admin) VALUES ('KyleRM', 'test', true);
INSERT INTO users (username, password, admin) VALUES ('test', 'test', false);
SELECT * FROM users;
