require 'sinatra'
require 'sinatra/activerecord'
require './models/drawing'
require './models/comment'

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

get '/' do
  @drawings = Drawing.all 
  erb :index
end

post '/save_drawing' do 
  dataURL = params[:data]
  Drawing.create!(dataURL: dataURL)
end

get '/drawing/:id' do 
  @all_comments = Comment.where("drawing_id = ?", params[:id])
  @drawing = Drawing.find(params[:id])
  erb :drawing
end

get '/dataURL' do 
  Drawing.find(params[:id]).dataURL
end

post '/' do
  Comment.create!(text: params['comment_text'], drawing_id: params['drawing_id'])
  redirect "/drawing/#{params[:drawing_id]}"
end