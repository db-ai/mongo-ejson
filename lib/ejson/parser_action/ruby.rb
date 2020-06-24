require 'ejson/parser_action/abstract'
require 'date'

module ParserAction
  class Ruby < ParserAction::Abstract
    UNICODE_ESCAPER = proc { |s|
      format('\u%04<char>X', char: s.codepoints[0])
    }

    def make_root(_input, _starts_at, _ends_at, elements)
      elements.first
    end

    def make_object(_input, _starts_at, _ends_at, elements)
      first_pair = elements.first
      other_pairs = elements.last

      object = { first_pair[0] => first_pair[1] }
      other_pairs.each do |element|
        pair = element.pair
        object[pair.first] = pair.last
      end

      object
    end

    def make_pair(_input, _starts_at, _ends_at, elements)
      elements
    end

    def make_empty_object(_input, _starts_at, _ends_at, _elements)
      {}
    end

    def make_string(_input, _starts_at, _ends_at, elements)
      quoted_string = %("#{elements.first.text}")
      quoted_string.encode('ASCII', fallback: UNICODE_ESCAPER).undump
    end

    def make_identifier(input, starts_at, ends_at, _elements)
      input[starts_at...ends_at]
    end

    def make_numeric_string(_input, _starts_at, _ends_at, elements)
      elements.first
    end

    def make_number_as_string(input, starts_at, ends_at, _elements)
      string = input[starts_at...ends_at]
      string.downcase!

      string
    end

    def make_array(_input, _starts_at, _ends_at, elements)
      list = [elements[0]]
      elements[1].each { |el| list << el.value }
      list
    end

    def make_empty_array(_input, _starts_at, _ends_at, _elements)
      []
    end

    def make_number(input, starts_at, ends_at, _elements)
      string = input[starts_at...ends_at]
      string.downcase!

      _number_from_string(string)
    end

    def make_null(_input, _starts_at, _ends_at)
      nil
    end

    def make_true(_input, _starts_at, _ends_at)
      true
    end

    def make_false(_input, _starts_at, _ends_at)
      false
    end

    # Makes ruby date from mongo Data type
    def make_date(_input, _starts_at, _ends_at, elements)
      value = elements.first

      case value
      when String
        _date_from_string(value)
      when Numeric
        Time.at(value)
      else
        raise ArgumentError,
              "Internal parser error. Unknown date atom type #{value.class}"
      end
    end

    def make_regexp(_input, _starts_at, _ends_at, elements)
      Regexp.new(elements.first.text, elements.last.text)
    end

    def make_number_long(_input, _starts_at, _ends_at, elements)
      elements.first
    end

    private

    def _number_from_string(string)
      return Float(string) if string.include? 'e'

      if string.include? '.'
        string.to_f
      else
        string.to_i
      end
    end

    def _date_from_string(string)
      DateTime.parse(string)
    rescue Date::Error, ArgumentError
      raise ExtendedJSON::ParseError, "Invalid date '#{string}'', expected ISO date"
    end
  end
end
