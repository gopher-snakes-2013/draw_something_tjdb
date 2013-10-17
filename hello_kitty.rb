require 'sinatra'
require 'sinatra/activerecord'
require './models/drawing'
require './models/comment'

use Rack::MethodOverride


ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/draw_kitty')

get '/' do
  @all_comments = Comment.all
  erb :index
end

post '/' do
  Comment.create!(text: params['comment_text'])
  redirect '/'
end