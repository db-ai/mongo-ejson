require 'ejson/parser_action/ruby'
require 'ejson/parser_action/wrap_types'
require 'bigdecimal'

module ParserAction
  class Wrap < ParserAction::Ruby
    def make_object_id(input, start, _ending, elements)
      value = elements.first

      ::Wrap::ObjectId.new(value)
    end

    def make_bin_data(input, start, _ending, elements)
      data = elements.last
      type = elements.first

      ::Wrap::BinData.new(type, data)
    end

    def make_timestamp(input, start, _ending, elements)
      ::Wrap::Timestamp.new(elements.first, elements.last)
    end

    def make_number_decimal(input, start, _ending, elements)
      BigDecimal(elements.first)
    end

    def make_db_ref(input, start, _ending, elements)
      ::Wrap::DBRef.new(elements.first, elements.last)
    end

    def make_min_key(input, start, _ending)
      ::Wrap::MinKey
    end

    def make_max_key(input, start, _ending)
      ::Wrap::MaxKey
    end

    def make_undefined(input, start, _ending)
      ::Wrap::Undefined
    end
  end
end
