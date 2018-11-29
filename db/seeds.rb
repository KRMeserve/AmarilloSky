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

CREATE TABLE members (id SERIAL, name VARCHAR(30), instrument VARCHAR(25), img VARCHAR(50), bio TEXT);
INSERT INTO members (name, instrument, img, bio) VALUES ('Tanner "The Voice" Smale', 'Lead Vocals', '/img/tanner.png', 'Bio will go here and it will be long and descriptive. Have not received the bio from him yet');
INSERT INTO members (name, instrument, img, bio) VALUES ('Rob "Thunder" Harrier', 'Bass/Backup Vocals', '/img/rob.png', 'Bio will go here and it will be long and descriptive. Have not received the bio from him yet');
INSERT INTO members (name, instrument, img, bio) VALUES ('Jerry "The Animal" Smith', 'Drums/Backup Vocals', '/img/jerry.png', 'Jerry was born in the boot-hill of Missouri and raised as an Airforce brat living in Germany and Scotland.  After graduating from Maconaquah High School in Bunkerhill, IN, Jerry joined the US Army travelling around the world, visiting countries like Japan, West Germany, Greece and Korea.
Jerry realized at an early age that he had a love of music and learned to play the drums.  After serving his country he decided to follow his love of music and joined a group of friends playing metal music with the band, Holeshot.  Since then, he has played other genres of music as a drummer and lead singer in such bands as, Derailed, a classic rock band, Doc Watkins and the Hardpack, playing blues music, Pretty Smooth, He Said She Said and Shots Fired Reloaded featuring variety music.
Jerry is featured on the drums with Amarillo Sky as well as supporting the band with vocal harmonies.
Today he and his wife Susan make their home in Plymouth, IN.
');
INSERT INTO members (name, instrument, img, bio) VALUES ('Adam "The Magnet" Sarna', 'Guitar', '/img/adam.png', 'Bio will go here and it will be long and descriptive. Have not received the bio from him yet');
SELECT * FROM members;

CREATE TABLE events (id SERIAL, location VARCHAR(50), venue VARCHAR(50), price INT, venue_contact VARCHAR(20), event_day VARCHAR(40), duration VARCHAR(30));
INSERT INTO events (location, venue, price, venue_contact, event_day, duration) VALUES ('Czars', 'St. Joseph, MI', 15, '269-983-1166', 'Friday, January 26 2018', '10:00pm-2:00am');
INSERT INTO events (location, venue, price, venue_contact, event_day, duration) VALUES ('Rullis', 'Middlebury, IN', 25, '574-825-7222', 'Friday, February 2 2018', '9:00pm-1:00am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Silver Inn', 'Middlebury, IN', '260-352-2870', 'Saturday, March 24 2018', '9:30pm-1:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Rexs Rendezvous', 'Warsaw, IN', '574-267-5066', 'Saturday, April 14, 2018', '9:00pm-1:00am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Danny Carr Benefit', 'Elkhart, IN', 'N/A', 'Saturday, April 28, 2018', '5:30pm-6:30pm');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Rexs Rendezvous', 'Warsaw, IN', '574-267-5066', 'Saturday, June 2, 2018', '10:00pm-2:00am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Someplace Else Saloon', 'Claypool, IN', '574-566-3280', 'Saturday, July 7, 2018', '8:00pm-12:00am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Rack House', 'South Bend, IN', '574-703-7663', 'Saturday, August 4, 2018', '8:30pm-12:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Elkhart Riverwalk Grand Prix', 'Elkhart, IN', 'N/A', 'Saturday, August 11, 2018', '12:00pm-1:30pm');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Someplace Else Saloon', 'Claypool, IN', '574-566-3208', 'Saturday, August 11, 2018', '8:00pm-12:00am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Angel of Hope Memorial Garden Benefit Run', 'South Bend, IN', '574-252-6500', 'Saturday, August 18, 2018', '3:00pm-5:00pm');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Czars', 'St. Joseph, MI', '269-983-1166', 'Saturday, August 18, 2018', '10:00pm-2:00am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Rusty Spur', 'Fort Wayne, IN', '260-755-3465', 'Saturday, September 8, 2018', '9:30pm-1:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Bulldog Saloon', 'Mentone, IN', '574-353-7408', 'Saturday, September 22, 2018', '9:00pm-1:00am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Silver Inn', 'Silver Lake, IN', '260-352-2870', 'Saturday, October 6, 2018', '9:30pm-1:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Pats Irish Pub', 'Granger, IN', '564-271-5526', 'Friday, October 26, 2018', '7:30pm-11:30pm');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Rack House', 'South Bend, IN', '574-703-7663', 'Saturday, November 3, 2018', '8:30pm-12:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Silver Inn', 'Silver Lake, IN', '260-352-2870', 'Saturday, November 21, 2018', '9:30pm-1:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Rusty Spur', 'Fort Wayne, IN', '260-755-3465', 'Friday, November 30, 2018', '9:30pm-1:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Rusty Spur', 'Fort Wayne, IN', '260-755-3465', 'Saturday, December 1, 2018', '9:30pm-1:30am');
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Silver Inn', 'Silver Lake, IN', '260-352-2870', 'Monday, December 31, 2018', '9:30pm-1:30am');
SELECT * FROM events;
