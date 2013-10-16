require 'sinatra'
require 'sinatra/activerecord'
require './environment'
require './dotenv'

use Rack::MethodOverride


set :database, ENV['DATABASE_URL'] || 'postgres:://localhost/draw_kitty'
ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])

get '/' do
  erb :index
end