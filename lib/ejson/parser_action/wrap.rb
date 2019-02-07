require 'ejson/parser_action/ruby'
require 'ejson/parser_action/wrap_types'
require 'bigdecimal'

module ParserAction
  class Wrap < ParserAction::Ruby
    def make_object_id(input, starts_at, _ends_at, elements)
      value = elements.first

      ::Wrap::ObjectId.new(value)
    end

    def make_bin_data(input, starts_at, _ends_at, elements)
      data = elements.last
      type = elements.first

      ::Wrap::BinData.new(type, data)
    end

    def make_timestamp(input, starts_at, _ends_at, elements)
      ::Wrap::Timestamp.new(elements.first, elements.last)
    end

    def make_number_decimal(input, starts_at, _ends_at, elements)
      BigDecimal(elements.first)
    end

    def make_db_ref(input, starts_at, _ends_at, elements)
      ::Wrap::DBRef.new(elements.first, elements.last)
    end

    def make_min_key(input, starts_at, _ends_at)
      ::Wrap::MinKey
    end

    def make_max_key(input, starts_at, _ends_at)
      ::Wrap::MaxKey
    end

    def make_undefined(input, starts_at, _ends_at)
      ::Wrap::Undefined
    end
  end
end
