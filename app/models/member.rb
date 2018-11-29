class Member
    if (ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'AmarilloSky_development'})
    end


    def self.all
        results = DB.exec('SELECT * FROM members;')
        results.map do |result|
            {
                'id' => result["id"].to_i,
                "name" => result["name"],
                "instrument" => result["instrument"],
                "img" => result["img"],
                "bio" => result["bio"],
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM members WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i,
            "name" => results.first["name"],
            "instrument" => results.first["instrument"],
            "img" => results.first["img"],
            "bio" => results.first["bio"],
        }
    end
end
