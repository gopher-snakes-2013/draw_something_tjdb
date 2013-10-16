configure :production, :development, :test do 
  db = URI.parse(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

  ActiveRecord::Base.establish_connection(
      adapter: 'postgresql',
      host: db.host,
      username: db.user,
      password: db.password,
      database: db.path[1..-1],
      encoding: 'utf8'

    )
end