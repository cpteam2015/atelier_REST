require 'mongo'

class Connector

  def initialize args
    Mongo::Logger.logger.level = ::Logger::FATAL
    
    mongo_client = Mongo::Client.new [args[:url]],
                                     database: args[:db_name],
                                     user: args[:user],
                                     password: args[:pwd]
    
    @collection = mongo_client[args[:coll]]
  end
  
  def findAll
    array = []
    @collection.find.each do |doc|
      doc[:_id] = doc[:_id].to_s
      array.push doc
    end
    array
  end

  def find id
    found = @collection.find _id: BSON::ObjectId.from_string(id)
    found = found.find.first
    found[:_id] = found[:_id].to_s
    found
  end

  def delete id
    @collection.delete_one _id: BSON::ObjectId.from_string(id)
  end

  def insert doc
    @collection.insert_one doc
  end

  def replace doc
    found = find doc[:_id]
    doc[:_id] = BSON::ObjectId.from_string doc[:_id]
    @collection.replace_one found, doc
  end

end
