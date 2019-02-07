require 'ejson/parser_action/ruby'

module ParserAction
  class BSON < ParserAction::Ruby
    def make_object_id(input, start, _ending, elements)
      value = elements.first

      ::BSON::ObjectId.from_string(value)
    end

    NUMBER_TO_TYPE = {
      0   => :generic,
      1   => :function,
      2   => :old,
      3   => :uuid_old,
      4   => :uuid,
      5   => :md5,
      128 => :user,
    }.freeze

    def make_bin_data(input, start, _ending, elements)
      data = elements.last
      type = elements.first

      if type.is_a? Numeric
        type = NUMBER_TO_TYPE[type]
      end

      ::BSON::Binary.new(data, type.to_sym)
    end

    def make_timestamp(input, start, _ending, elements)
      ::BSON::Timestamp.new(elements.first, elements.last)
    end

    def make_number_decimal(input, start, _ending, elements)
      value = elements.first

      ::BSON::Decimal128.new(value.to_s)
    end

    def make_db_ref(input, start, _ending, elements)
      {
        "$ref": elements.first,
        "$id":  elements.last,
      }
    end

    def make_min_key(input, start, _ending)
      ::BSON::MinKey
    end

    def make_max_key(input, start, _ending)
      ::BSON::MaxKey
    end

    def make_undefined(input, start, _ending)
      ::BSON::Undefined
    end
  end
end
