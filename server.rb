require 'sinatra'
require 'json'
require_relative 'model'

get '/atelier' do 
	halt 200, getAtelierColl.to_json	
end

get '/atelier/:id' do
	halt 200, getAtelier.to_json
end

get '/atelier.html' do
	send_file 'app/atelier.html'
end
get '/controllerAtelier.js' do
	send_file 'app/controllerAtelier.js'
end
