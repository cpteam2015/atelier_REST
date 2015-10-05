require 'sinatra'
require 'json'
require_relative 'model'
require_relative 'db/atelier_connector'
require 'pp'

include AtelierModel


get '/' do
	erb :atelier
	#pp 'get /'
  #halt 200, getAtelierMock.to_json
end
get '/' do
  erb :listeAtelier
end

get '/atelier' do
  erb :atelier
end

get '/atelier' do
  halt 200, getAtelier.to_json	
end

get '/atelier/:id' do
  halt 200, getAtelier(params[:id]).to_json
end

put '/atelier/:id' do
  replaceAtelier request.body.read
  halt 200
end

post '/atelier' do
  insertAtelier request.body.read
  halt 200
end

get '/mockup.json' do
	send_file 'mockup.json'
end

delete '/atelier/:id' do
  deleteAtelier params[:id]
  halt 200
end
