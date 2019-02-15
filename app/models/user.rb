class User
    if (ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'AmarilloSky_development'})
    end


    def self.all
        results = DB.exec('SELECT * FROM users;')
        results.map do |result|
            {
                'id' => result["id"].to_i,
                "username" => result["username"],
                "password" => result["password"],
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM users WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i,
            "username" => results.first["username"],
            "password" => results.first["password"],
        }
    end
end
