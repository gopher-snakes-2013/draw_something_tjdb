
ENV['DATABASE_URL']='postgres://localhost/draw_kitty'
configure :production, :development, :test do 
  db = URI.parse(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

  # puts "host:"
  # puts db.host
  # puts "adapter:"
  # puts db.adapter
  # puts "username:"
  # put db.username
  # puts "password"
  # puts db.password
  # puts "database"
  # puts db.database 
  # puts "DATABASE_URL"
  # puts ENV['DATABASE_URL']

  ActiveRecord::Base.establish_connection(
      adapter: 'postgresql',
      # host: db.host,
      # username: db.user,
      # password: "",
      # database: db.path[1..-1],
      # encoding: 'utf8'

    )
end