class Event
    if (ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'AmarilloSky_development'})
    end


    def self.all
        results = DB.exec('SELECT * FROM events;')
        results.map do |result|
            {
                'id' => result["id"].to_i,
                "location" => result["location"],
                "venue" => result["venue"],
                "price" => result["price"].to_i,
                "event" => result["event"],
                "venue_contact" => result["venue_contact"],
                "event_day" => result["event_day"],
                "duration" => result["duration"],
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM events WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i,
            "location" => results.first["location"],
            "venue" => results.first["venue"],
            "price" => results.first["price"].to_i,
            "event" => results.first["event"],
            "venue_contact" => results.first["venue_contact"],
            "event_day" => results.first["event_day"],
            "duration" => results.first["duration"],
        }
    end

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO events (location, venue, event_day, duration)
                VALUES ( '#{opts["location"]}', '#{opts["venue"]}', '#{opts["event_day"]}', '#{opts["duration"]}' )
                RETURNING id, location, venue, event_day, duration;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "location" => results.first["location"],
            "venue" => results.first["venue"],
            "event_day" => results.first["event_day"],
            "duration" => results.first["duration"],
        }
    end

    def self.delete(id)
        results = DB.exec("DELETE FROM events WHERE id=#{id};")
        return {"deleted" => true}
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE events
                SET location='#{opts["location"]}', venue='#{opts["venue"]}', price=#{opts["price"]}, event='#{opts["event"]}', venue_contact='#{opts["venue_contact"]}', event_day='#{opts["event_day"]}', duration='#{opts["duration"]}'
                WHERE id=#{id}
                RETURNING id, location, venue, price, event, venue_contact, event_day, duration;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "location" => results.first["location"],
            "venue" => results.first["venue"],
            "price" => results.first["price"].to_i,
            "event" => results.first["event"],
            "venue_contact" => results.first["venue_contact"],
            "event_day" => results.first["event_day"],
            "duration" => restuls.first["duration"],
        }
    end

end
