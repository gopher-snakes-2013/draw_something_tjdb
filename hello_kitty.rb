require 'sinatra'
require 'sinatra/activerecord'
require './models/drawing'

use Rack::MethodOverride


ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

get '/' do
  @drawings = Drawing.all 
  erb :index
end

post '/save_drawing' do 
  dataURL = params[:data]
  Drawing.create(dataURL: dataURL)
end

get '/drawings' do 
  @drawings = Drawing.all 
  erb :drawing 
end

get '/drawing/:id' do 
  @drawing = Drawing.find(params[:id])
  erb :drawing
end

get '/dataURL' do 
  Drawing.find(params[:id]).dataURL
end