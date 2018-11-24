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

CREATE TABLE events (id SERIAL, location VARCHAR(50), venue VARCHAR(50), price INT, venue_contact VARCHAR(20), description VARCHAR(255));
INSERT INTO events (location, venue, price, venue_contact, description) VALUES ('Test Location', 'Test Venue', 15, 'Test venue contact', 'A test description of the event, which really does not have to mean anything but I want it to be long.');
INSERT INTO events (location, venue, price, venue_contact, description) VALUES ('Other Location', 'Other Venue', 25, 'Other venue contact', 'A test description of the other event, which really does not have to mean anything but I want it to be long.');
SELECT * FROM events;
