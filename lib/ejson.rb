require_relative '../src/ejson.rb'

require 'ejson/parser_action/abstract'
require 'ejson/parser_action/wrap'
require 'ejson/parser_action/bson'

require 'ejson/version'

class EJSON
  class << self
    def validate(json_string)
      ExtendedJSON.parse(json_string, actions: ParserAction::Abstract)
    end

    def parse_bson(json_string)
      boot_bson

      ExtendedJSON.parse(json_string, actions: ParserAction::BSON.new)
    end

    def parse_wrap(json_string)
      ExtendedJSON.parse(json_string, actions: ParserAction::Wrap.new)
    end

    private
    def boot_bson
      return if defined? ::BSON
      require 'bson' rescue nil

      unless defined? ::BSON
        raise "Can't find constant ::BSON. Seems like gem 'bson' is not " \
              "loaded. Make sure it's available in your bundle."
      end
    end
  end
end
