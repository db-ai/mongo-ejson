require 'ejson/parser_action/abstract'
require 'date'

module ParserAction
  class Ruby < ParserAction::Abstract
    def make_root(input, starts_at, _ends_at, elements)
      elements.first
    end

    def make_object(input, starts_at, _ends_at, elements)
      first_pair = elements.first
      other_pairs = elements.last

      object = { first_pair[0] => first_pair[1] }
      other_pairs.each do |element|
        pair = element.pair
        object[pair.first] = pair.last
      end

      object
    end

    def make_pair(input, starts_at, _ends_at, elements)
      elements
    end

    def make_empty_object(input, starts_at, _ends_at, elements)
      {}
    end

    def make_string(input, starts_at, _ends_at, elements)
      %("#{elements.first.text}").undump
    end

    def make_numeric_string(input, starts_at, _ends_at, elements)
      elements.first
    end

    def make_number_as_string(input, starts_at, ends_at, elements)
      string = input[starts_at...ends_at]
      string.downcase!

      string
    end

    def make_array(input, starts_at, _ends_at, elements)
      list = [elements[0]]
      elements[1].each { |el| list << el.value }
      list
    end

    def make_empty_array(input, starts_at, _ends_at, elements)
      []
    end

    def make_number(input, starts_at, ends_at, elements)
      string = input[starts_at...ends_at]
      string.downcase!

      _number_from_string(string)
    end

    def make_null(input, starts_at, _ends_at)
      nil
    end

    def make_true(input, starts_at, _ends_at)
      true
    end

    def make_false(input, starts_at, _ends_at)
      false
    end

    # Makes ruby date from mongo Data type
    def make_date(input, starts_at, _ends_at, elements)
      value = elements.first

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

    def make_regexp(input, starts_at, _ends_at, elements)
      Regexp.new(elements.first.text, elements.last.text)
    end

    def make_number_long(input, starts_at, _ends_at, elements)
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
  end
end
