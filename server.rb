require 'sinatra'
require 'json'
require_relative 'model'
require_relative 'db/atelier_connector'
require 'pp'

include AtelierModel

get '/:id' do
	erb :atelier
	#pp 'get /'
  #halt 200, getAtelierMock.to_json
end

get '/atelier' do
  halt 200, getAtelier.to_json	
end

get '/atelier/:id' do
  halt 200, getAtelier(params[:id]).to_json
end

put '/atelier/:id' do
  replaceAtelier request.body
end

post '/atelier' do
  insertAtelier request.body
end

delete '/atelier/:id' do
  deleteAtelier params[:id]
end
