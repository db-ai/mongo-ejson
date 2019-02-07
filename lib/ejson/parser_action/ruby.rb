require 'ejson/parser_action/abstract'
require 'date'

module ParserAction
  class Ruby < ParserAction::Abstract
    def make_root(input, start, _ending, elements)
      elements.first
    end

    def make_object(input, start, _ending, elements)
      first_pair = elements.first
      other_pairs = elements.last

      object = { first_pair[0] => first_pair[1] }
      other_pairs.each do |element|
        pair = element.pair
        object[pair.first] = pair.last
      end

      object
    end

    def make_pair(input, start, _ending, elements)
      elements
    end

    def make_empty_object(input, start, _ending, elements)
      {}
    end

    def make_string(input, start, _ending, elements)
      %("#{elements.first.text}").undump
    end

    def make_numeric_string(input, start, _ending, elements)
      elements.first
    end

    def make_number_as_string(input, start, ending, elements)
      string = input[start...ending]
      string.downcase!

      string
    end

    def make_array(input, start, _ending, elements)
      list = [elements[0]]
      elements[1].each { |el| list << el.value }
      list
    end

    def make_empty_array(input, start, _ending, elements)
      []
    end

    def make_number(input, start, ending, elements)
      string = input[start...ending]
      string.downcase!

      _number_from_string(string)
    end

    def make_null(input, start, _ending)
      nil
    end

    def make_true(input, start, _ending)
      true
    end

    def make_false(input, start, _ending)
      false
    end

    # Makes ruby date from mongo Data type
    def make_date(input, start, _ending, elements)
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

    def make_regexp(input, start, _ending, elements)
      Regexp.new(elements.first.text, elements.last.text)
    end

    def make_number_long(input, start, _ending, elements)
      elements.first
    end

    private

    def _number_from_string(string)
      if string.include? 'e'
        return Float(string)
      end

      if string.include? '.'
        string.to_f
      else
        string.to_i
      end
    end
  end
end
