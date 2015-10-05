require 'pp'
module AtelierModel

  def getAtelierCollMock
    content_type :json
    json = File.read('mockup.json')
    json = JSON.parse(json)
    json
  end

  def getAtelierMock
    content_type :json
    json = File.read('mockup.json')
    json = JSON.parse(json)
    json[0]
  end

  def getAtelier id=nil
    connector = AtelierConnector.new
    pp connector
    if id.nil?
      connector.findAll
    else
      connector.find id
    end
  end

  def replaceAtelier atelier
    connector = AtelierConnector.new
    hash = JSON.parse atelier
    connector.replace hash
  end

  def insertAtelier a
    connector = AtelierConnector.new
    hash = JSON.parse a
    connector.insert hash
  end

  def deleteAtelier id
    connector = AtelierConnector.new
    connector.delete id
  end

end
