require 'sinatra'
require 'sinatra/activerecord'
require './models/drawing'
require './models/comment'

use Rack::MethodOverride


ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

get '/' do
  erb :index
end