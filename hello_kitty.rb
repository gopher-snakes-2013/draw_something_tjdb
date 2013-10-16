require 'sinatra'
require 'sinatra/activerecord'
require './models/drawing'

use Rack::MethodOverride


set :database, ENV['DATABASE_URL'] || 'postgres:://localhost/draw_kitty'
ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

get '/' do
  erb :index
end