require_relative 'connector'

class AtelierConnector < Connector

  def initialize
    args = { url:'ds051893.mongolab.com:51893/cp',
             db_name: 'cp',
             user: 'cpteam2015',
             pwd: 'ateliers',
             coll: 'ateliers'
           }
    super args
  end
  
end
