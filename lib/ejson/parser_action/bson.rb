require 'ejson/parser_action/ruby'

module ParserAction
  class BSON < ParserAction::Ruby
    def make_object_id(input, start, _end, elements)
      value = elements.first.hex_value.text
      ::BSON::ObjectId.from_string(value)
    end

    NUMBER_TO_TYPE = {
      0    =>  :generic,
      1    =>  :function,
      2    =>  :old,
      3    =>  :uuid_old,
      4    =>  :uuid,
      5    =>  :md5,
      128  =>  :user,
    }

    def make_bin_data(input, start, _end, elements)
      data = elements.last.text
      type = elements.first.value

      if type.is_a? Numeric
        type = NUMBER_TO_TYPE[type]
      end

      ::BSON::Binary.new(data, type.to_sym)
    end

    def make_timestamp(input, start, _end, elements)
      ::BSON::Timestamp.new(elements.first.value, elements.last.value)
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

      ::BSON::Decimal128.new(number.to_s)
    end

    def make_date(input, start, _end, elements)
      value = elements.first.value

      case value
      when String
        DateTime.parse(value)
      when Numeric
        Time.at(value)
      else
        raise ArgumentError,
              "Internal parser error. Unknown date atom type #{value.class}"
      end
    end

    def make_regexp(input, start, _end, elements)
      Regexp.new(elements.first.text, elements.last.text)
    end

    def make_db_ref(input, start, _end, elements)
      {
          "$ref": elements.first,
          "$id": elements.last,
      }
    end

    def make_min_key(input, start, _end)
      ::BSON::MinKey
    end

    def make_max_key(input, start, _end)
      ::BSON::MaxKey
    end

    def make_undefined(input, start, _end)
      ::BSON::Undefined
    end
  end
end
