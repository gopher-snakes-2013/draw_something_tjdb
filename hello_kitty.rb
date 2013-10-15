require 'sinatra'
require 'sinatra/activerecord'
require './environment'
require './dotenv'


set :database, ENV['DATABASE_URL']

get '/' do 
  "Hello Kitty"
end