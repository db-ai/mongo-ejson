require 'ejson/parser_action/ruby'
require 'ejson/parser_action/wrap_types'
require 'bigdecimal'

module ParserAction
  class Wrap < ParserAction::Ruby
    def make_object_id(_input, _starts_at, _ends_at, elements)
      value = elements.first

      ::Wrap::ObjectId.new(value)
    end

    def make_bin_data(_input, _starts_at, _ends_at, elements)
      data = elements.last
      type = elements.first

      ::Wrap::BinData.new(type, data)
    end

    def make_timestamp(_input, _starts_at, _ends_at, elements)
      ::Wrap::Timestamp.new(elements.first, elements.last)
    end

    def make_number_decimal(_input, _starts_at, _ends_at, elements)
      BigDecimal(elements.first)
    end

    def make_db_ref(_input, _starts_at, _ends_at, elements)
      ::Wrap::DBRef.new(elements.first, elements.last)
    end

    def make_min_key(_input, _starts_at, _ends_at)
      ::Wrap::MinKey
    end

    def make_max_key(_input, _starts_at, _ends_at)
      ::Wrap::MaxKey
    end

    def make_undefined(_input, _starts_at, _ends_at)
      ::Wrap::Undefined
    end
  end
end
