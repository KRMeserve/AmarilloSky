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
INSERT INTO members (name, instrument, img, bio) VALUES ('Tanner "The Voice" Smale', 'Lead Vocals', '/img/tanner.png', 'Tanner was born and raised in Elkhart, IN. Finding an affinity early on for performing, he has been singing for large crowds since 8th grade. He later received a degree in Musical Theatre from North Central College in Naperville, IL. Following his education, Tanner worked as a professional actor in the Chicago region for a time before proposing to his high school sweetheart and planting his roots in South Bend, IN. Since in 2013, Tanner has worked for Premier Arts (a local community theatre organization located Downtown Elkhart) as an Acting Instructor and Scenic Artist. He also performs regularly in musicals at the Lerner Theater.
Tanner is featured as lead vocalist (and virtuosic tambourinist) for Amarillo Sky.');
INSERT INTO members (name, instrument, img, bio) VALUES ('Rob "Thunder" Harrier', 'Bass/Backup Vocals', '/img/rob.png', 'Rob is originally from Tuscon, Arizona. His musical influences started with the
LA bands, then progressed to Kiss and Iron Maiden. He moved to Indiana where he
started playing music in Middle School. Rob has been playing the Bass ever since with multiple bands and enjoys all different genres. Rob plays Gibson Basses
and uses Ampeg Amps. He has a Harbinger powered PA system with a programmable
LED light show, including 3D laser lights.
Rob founded Amarillo Sky in 2015 when he realized that there was a niche for a
modern country cover band in this area. Since then the band has progressed to what it
has become today – a popular, pop and rock style country band.
His goal for the band is to provide the area with a high-quality, energetic, fun
band that can play for all venues – weddings, festivals, parties, and night clubs for
everyone to enjoy.');
INSERT INTO members (name, instrument, img, bio) VALUES ('Jerry "The Animal" Smith', 'Drums/Backup Vocals', '/img/jerry.png', 'Jerry was born in the Missouri Bootheel and raised as an Airforce brat living in Germany and Scotland.  After graduating from Maconaquah High School in Bunkerhill, IN, Jerry joined the US Army travelling around the world, visiting countries like Japan, West Germany, Greece and Korea.
Jerry realized at an early age that he had a love of music and learned to play the drums.  After serving his country, he decided to follow his love of music and joined a group of friends playing metal music with the band, Holeshot.  Since then, he has played other genres of music as a drummer and lead singer in such bands as Derailed (a classic rock band), Doc Watkins and the Hardpack (playing blues music), Pretty Smooth, He Said She Said and Shots Fired Reloaded (featuring a variety of music).
Jerry is featured on the drums with Amarillo Sky as well as supporting the band with vocal harmonies.
Today he and his wife Susan make their home in Plymouth, IN.
');
INSERT INTO members (name, instrument, img, bio) VALUES ('Adam "The Magnet" Sarna', 'Guitar', '/img/adam.png', 'Adam is from Plymouth, Indiana. He comes from a musical family background. Adam grew up listening to a variety of music . He started playing guitar at 13 years old with family members. They played everything from punk to classic rock, heavy metal to country and even classical. His Uncle Dennis Ringel and cousin Ron Warner are great
musicians, along with John Keck, Jerry Mitchell, Chris Sarna, and Todd Kuchel. Adam
has played with many bands over the years, including Article 1, Bad Habit, Lickety
Split, Charges Pending, Shots Fired Reloaded, and, of course, Amarillo Sky. Adam says
he is very lucky to have played with all these people and he is looking forward to pushing
on with Tanner, Rob and Jerry in Amarillo Sky.');
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
INSERT INTO events (location, venue, venue_contact, event_day, duration) VALUES ('Silver Inn', 'Silver Lake, IN', '260-352-2870', 'Monday, December 31, 2018', '9:00pm-1:00am');
INSERT INTO events (location, venue, event_day, duration) VALUES ('Czars', 'St. Joseph, MI', 'Friday, February 22, 2019', '10:00pm-2:00am');
INSERT INTO events (location, venue, event_day, duration) VALUES ('The Rusty Spur', 'Fort Wayne, IN', 'Saturday, April 27, 2019', '9:30pm-1:30am');
INSERT INTO events (location, venue, event_day, duration) VALUES ('Koontz Lake Association Party', 'Walkerton, IN', 'Saturday, May 25, 2019', '7:00pm-10:00pm');
INSERT INTO events (location, venue, event_day, duration) VALUES ('Summer Dance Elkhart Downtown Civic Plaza', 'Elkhart, IN', 'Saturday, August 17, 2019', '8:00pm-10:00pm');
SELECT * FROM events;
