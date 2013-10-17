require './hello_kitty'
require 'capybara/rspec'
require 'shoulda-matchers'

Capybara.app = Sinatra::Application

RSpec.configure do |config|
  config.before do
    Comment.destroy_all
    Drawing.destroy_all
  end
end