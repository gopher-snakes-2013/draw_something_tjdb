require 'sinatra'
require 'sinatra/activerecord'
require './models/drawing'

use Rack::MethodOverride


ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

get '/' do
  erb :index
end

post '/save_drawing' do 
  dataURL = params[:data]
  Drawing.create(dataURL: dataURL)
end