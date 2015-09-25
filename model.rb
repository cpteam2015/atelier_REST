def getAtelierColl
	content_type :json
	json = File.read('mockup.json')
	json = JSON.parse(json)
	return json
end

def getAtelier
	content_type :json
	json = File.read('mockup.json')
	json = JSON.parse(json)
	return json[0]
end
