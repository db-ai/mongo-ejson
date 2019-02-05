require 'ejson/parser_action/ruby'
require 'ejson/parser_action/wrap_types'

module ParserAction
  class Wrap < ParserAction::Ruby
    def make_object_id(input, start, _end, elements)
      ::Wrap::ObjectId.new(elements.first.text)
    end

    def make_bin_data(input, start, _end, elements)
      ::Wrap::BinData.new(elements.first.value, elements.last.text)
    end

    def make_timestamp(input, start, _end, elements)
      ::Wrap::Timestamp.new(elements.first.value, elements.last.value)
    end

    def make_number_long(input, start, _end, elements)
      value = elements.first.value

      if value.respond_to? :elements
        value.elements.first
      else
        value
      end
    end

    def make_number_decimal(input, start, _end, elements)
      value = elements.first.value

      if value.respond_to? :elements
        number = value.elements.first
      else
        number = value
      end

      ::Wrap::NumberDecimal.new(number)
    end

    def make_date(input, start, _end, elements)
      ::Wrap::Date.new(elements.first.value)
    end

    def make_regexp(input, start, _end, elements)
      ::Wrap::RegExp.new(elements.first.text, elements.last.text)
    end

    def make_db_ref(input, start, _end, elements)
      ::Wrap::DBRef.new(elements.first, elements.last)
    end

    def make_min_key(input, start, _end)
      ::Wrap::MinKey
    end

    def make_max_key(input, start, _end)
      ::Wrap::MaxKey
    end

    def make_undefined(input, start, _end)
      ::Wrap::Undefined
    end
  end
end
