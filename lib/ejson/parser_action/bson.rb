require 'ejson/parser_action/ruby'

module ParserAction
  class BSON < ParserAction::Ruby
    def make_object_id(_input, _starts_at, _ends_at, elements)
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

    def make_bin_data(_input, _starts_at, _ends_at, elements)
      data = elements.last
      type = elements.first

      type = NUMBER_TO_TYPE[type] if type.is_a? Numeric

      ::BSON::Binary.new(data, type.to_sym)
    end

    def make_timestamp(_input, _starts_at, _ends_at, elements)
      ::BSON::Timestamp.new(elements.first, elements.last)
    end

    def make_number_decimal(_input, _starts_at, _ends_at, elements)
      value = elements.first

      ::BSON::Decimal128.new(value.to_s)
    end

    def make_db_ref(_input, _starts_at, _ends_at, elements)
      {
        "$ref": elements.first,
        "$id":  elements.last,
      }
    end

    def make_min_key(_input, _starts_at, _ends_at)
      ::BSON::MinKey
    end

    def make_max_key(_input, _starts_at, _ends_at)
      ::BSON::MaxKey
    end

    def make_undefined(_input, _starts_at, _ends_at)
      ::BSON::Undefined
    end
  end
end
