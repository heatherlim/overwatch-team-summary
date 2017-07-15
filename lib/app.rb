require 'sinatra'
require_relative 'scraper'

configure { set :server, :puma }

set :root, 'lib/app'

get '/' do
  render :html, :index
end

get '/api/:battletag' do |battletag|
  content_type :json
  scraper = Scraper.new("#{battletag}")

  if scraper.error 
    redirect "/errors"
  else  
    scraper.construct_json
  end
end

error 404 do
  "Player not found"
end

get '/errors' do 
  404
end

