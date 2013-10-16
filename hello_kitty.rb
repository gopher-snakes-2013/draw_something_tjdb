require 'sinatra'
require 'sinatra/activerecord'
require './environment'
require './dotenv'

use Rack::MethodOverride


set :database, ENV['DATABASE_URL']

get '/' do
  erb :index
end