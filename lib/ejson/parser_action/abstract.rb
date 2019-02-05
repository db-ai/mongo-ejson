require 'ejson/parser_action/abstract_json'
require 'ejson/parser_action/abstract_mongo'

module ParserAction
  class Abstract
    include ParserAction::AbstractJSON
    include ParserAction::AbstractMongo
  end
end
