# This file was generated from src/ejson.peg
# See http://canopy.jcoglan.com/ for documentation.

module ExtendedJSON
  class TreeNode
    include Enumerable
    attr_reader :text, :offset, :elements

    def initialize(text, offset, elements = [])
      @text = text
      @offset = offset
      @elements = elements
    end

    def each(&block)
      @elements.each(&block)
    end
  end

  class TreeNode1 < TreeNode
    attr_reader :value

    def initialize(text, offset, elements)
      super
      @value = elements[1]
    end
  end

  class TreeNode2 < TreeNode
    attr_reader :pair

    def initialize(text, offset, elements)
      super
      @pair = elements[0]
    end
  end

  class TreeNode3 < TreeNode
    attr_reader :pair

    def initialize(text, offset, elements)
      super
      @pair = elements[0]
    end
  end

  class TreeNode4 < TreeNode
    attr_reader :value

    def initialize(text, offset, elements)
      super
      @value = elements[0]
    end
  end

  class TreeNode5 < TreeNode
    attr_reader :value

    def initialize(text, offset, elements)
      super
      @value = elements[0]
    end
  end

  class TreeNode6 < TreeNode
    attr_reader :identifier_start

    def initialize(text, offset, elements)
      super
      @identifier_start = elements[0]
    end
  end

  class TreeNode7 < TreeNode
    attr_reader :unicode_escape

    def initialize(text, offset, elements)
      super
      @unicode_escape = elements[1]
    end
  end

  class TreeNode8 < TreeNode
    attr_reader :hex_digit

    def initialize(text, offset, elements)
      super
      @hex_digit = elements[4]
    end
  end

  class TreeNode9 < TreeNode
    attr_reader :hex_value

    def initialize(text, offset, elements)
      super
      @hex_value = elements[0]
    end
  end

  class TreeNode10 < TreeNode
    attr_reader :hex_value

    def initialize(text, offset, elements)
      super
      @hex_value = elements[0]
    end
  end

  class TreeNode11 < TreeNode
    attr_reader :integer_number

    def initialize(text, offset, elements)
      super
      @integer_number = elements[0]
    end
  end

  class TreeNode12 < TreeNode
    attr_reader :integer_number

    def initialize(text, offset, elements)
      super
      @integer_number = elements[0]
    end
  end

  class TreeNode13 < TreeNode
    attr_reader :number

    def initialize(text, offset, elements)
      super
      @number = elements[0]
    end
  end

  class TreeNode14 < TreeNode
    attr_reader :number

    def initialize(text, offset, elements)
      super
      @number = elements[0]
    end
  end

  class TreeNode15 < TreeNode
    attr_reader :base64_value

    def initialize(text, offset, elements)
      super
      @base64_value = elements[0]
    end
  end

  class TreeNode16 < TreeNode
    attr_reader :base64_value

    def initialize(text, offset, elements)
      super
      @base64_value = elements[0]
    end
  end

  class TreeNode17 < TreeNode
    attr_reader :integer

    def initialize(text, offset, elements)
      super
      @integer = elements[1]
    end
  end

  class TreeNode18 < TreeNode
    attr_reader :integer

    def initialize(text, offset, elements)
      super
      @integer = elements[1]
    end
  end

  class TreeNode19 < TreeNode
    attr_reader :integer

    def initialize(text, offset, elements)
      super
      @integer = elements[0]
    end
  end

  class TreeNode20 < TreeNode
    attr_reader :hex_string

    def initialize(text, offset, elements)
      super
      @hex_string = elements[0]
    end
  end

  class TreeNode21 < TreeNode
    attr_reader :bin_data_type, :base64_string

    def initialize(text, offset, elements)
      super
      @bin_data_type = elements[0]
      @base64_string = elements[1]
    end
  end

  class TreeNode22 < TreeNode
    attr_reader :integer_number

    def initialize(text, offset, elements)
      super
      @integer_number = elements[1]
    end
  end

  class TreeNode23 < TreeNode
    attr_reader :number_long_value

    def initialize(text, offset, elements)
      super
      @number_long_value = elements[0]
    end
  end

  class TreeNode24 < TreeNode
    attr_reader :number_decimal_value

    def initialize(text, offset, elements)
      super
      @number_decimal_value = elements[0]
    end
  end

  class TreeNode25 < TreeNode
    attr_reader :date_value

    def initialize(text, offset, elements)
      super
      @date_value = elements[0]
    end
  end

  class TreeNode26 < TreeNode
    attr_reader :string

    def initialize(text, offset, elements)
      super
      @string = elements[1]
    end
  end

  class TreeNode27 < TreeNode
    attr_reader :comma

    def initialize(text, offset, elements)
      super
      @comma = elements[0]
    end
  end

  ParseError = Class.new(StandardError)

  FAILURE = Object.new

  module Grammar
    def _read_root
      address0, index0 = FAILURE, @offset
      cached = @cache[:root][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        index2 = @offset
        address2 = _read_object
        if address2 == FAILURE
          @offset = index2
          address2 = _read_array
          if address2 == FAILURE
            @offset = index2
          end
        end
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read___
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_root(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:root][index0] = [address0, @offset]
      return address0
    end

    def _read_object
      address0, index0 = FAILURE, @offset
      cached = @cache[:object][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_non_empty_object
      if address0 == FAILURE
        @offset = index1
        address0 = _read_empty_object
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:object][index0] = [address0, @offset]
      return address0
    end

    def _read_pair
      address0, index0 = FAILURE, @offset
      cached = @cache[:pair][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        index2 = @offset
        address2 = _read_string
        if address2 == FAILURE
          @offset = index2
          address2 = _read_identifier
          if address2 == FAILURE
            @offset = index2
          end
        end
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_assignment
          unless address3 == FAILURE
            address4 = FAILURE
            address4 = _read_value
            unless address4 == FAILURE
              elements0 << address4
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_pair(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:pair][index0] = [address0, @offset]
      return address0
    end

    def _read_non_empty_object
      address0, index0 = FAILURE, @offset
      cached = @cache[:non_empty_object][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_object_open
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_pair
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          remaining0, index2, elements1, address4 = 0, @offset, [], true
          until address4 == FAILURE
            index3, elements2 = @offset, []
            address5 = FAILURE
            address5 = _read_delimiter
            unless address5 == FAILURE
              address6 = FAILURE
              address6 = _read_pair
              unless address6 == FAILURE
                elements2 << address6
              else
                elements2 = nil
                @offset = index3
              end
            else
              elements2 = nil
              @offset = index3
            end
            if elements2.nil?
              address4 = FAILURE
            else
              address4 = TreeNode3.new(@input[index3...@offset], index3, elements2)
              @offset = @offset
            end
            unless address4 == FAILURE
              elements1 << address4
              remaining0 -= 1
            end
          end
          if remaining0 <= 0
            address3 = TreeNode.new(@input[index2...@offset], index2, elements1)
            @offset = @offset
          else
            address3 = FAILURE
          end
          unless address3 == FAILURE
            elements0 << address3
            address7 = FAILURE
            address7 = _read_object_close
            unless address7 == FAILURE
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_object(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:non_empty_object][index0] = [address0, @offset]
      return address0
    end

    def _read_empty_object
      address0, index0 = FAILURE, @offset
      cached = @cache[:empty_object][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_object_open
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_object_close
        unless address2 == FAILURE
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_empty_object(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:empty_object][index0] = [address0, @offset]
      return address0
    end

    def _read_array
      address0, index0 = FAILURE, @offset
      cached = @cache[:array][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_non_empty_array
      if address0 == FAILURE
        @offset = index1
        address0 = _read_empty_array
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:array][index0] = [address0, @offset]
      return address0
    end

    def _read_non_empty_array
      address0, index0 = FAILURE, @offset
      cached = @cache[:non_empty_array][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_array_open
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_value
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          remaining0, index2, elements1, address4 = 0, @offset, [], true
          until address4 == FAILURE
            index3, elements2 = @offset, []
            address5 = FAILURE
            address5 = _read_delimiter
            unless address5 == FAILURE
              address6 = FAILURE
              address6 = _read_value
              unless address6 == FAILURE
                elements2 << address6
              else
                elements2 = nil
                @offset = index3
              end
            else
              elements2 = nil
              @offset = index3
            end
            if elements2.nil?
              address4 = FAILURE
            else
              address4 = TreeNode5.new(@input[index3...@offset], index3, elements2)
              @offset = @offset
            end
            unless address4 == FAILURE
              elements1 << address4
              remaining0 -= 1
            end
          end
          if remaining0 <= 0
            address3 = TreeNode.new(@input[index2...@offset], index2, elements1)
            @offset = @offset
          else
            address3 = FAILURE
          end
          unless address3 == FAILURE
            elements0 << address3
            address7 = FAILURE
            address7 = _read_array_close
            unless address7 == FAILURE
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_array(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:non_empty_array][index0] = [address0, @offset]
      return address0
    end

    def _read_empty_array
      address0, index0 = FAILURE, @offset
      cached = @cache[:empty_array][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_array_open
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_array_close
        unless address2 == FAILURE
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_empty_array(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:empty_array][index0] = [address0, @offset]
      return address0
    end

    def _read_value
      address0, index0 = FAILURE, @offset
      cached = @cache[:value][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_json_values
      if address0 == FAILURE
        @offset = index1
        address0 = _read_mongo_literals
        if address0 == FAILURE
          @offset = index1
          address0 = _read_mongo_types
          if address0 == FAILURE
            @offset = index1
          end
        end
      end
      @cache[:value][index0] = [address0, @offset]
      return address0
    end

    def _read_json_values
      address0, index0 = FAILURE, @offset
      cached = @cache[:json_values][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_object
      if address0 == FAILURE
        @offset = index1
        address0 = _read_array
        if address0 == FAILURE
          @offset = index1
          address0 = _read_number
          if address0 == FAILURE
            @offset = index1
            address0 = _read_string
            if address0 == FAILURE
              @offset = index1
              address0 = _read_boolean
              if address0 == FAILURE
                @offset = index1
                address0 = _read_null
                if address0 == FAILURE
                  @offset = index1
                end
              end
            end
          end
        end
      end
      @cache[:json_values][index0] = [address0, @offset]
      return address0
    end

    def _read_mongo_literals
      address0, index0 = FAILURE, @offset
      cached = @cache[:mongo_literals][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_min_key
      if address0 == FAILURE
        @offset = index1
        address0 = _read_max_key
        if address0 == FAILURE
          @offset = index1
          address0 = _read_undefined
          if address0 == FAILURE
            @offset = index1
            address0 = _read_regexp_string
            if address0 == FAILURE
              @offset = index1
            end
          end
        end
      end
      @cache[:mongo_literals][index0] = [address0, @offset]
      return address0
    end

    def _read_mongo_types
      address0, index0 = FAILURE, @offset
      cached = @cache[:mongo_types][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_object_id
      if address0 == FAILURE
        @offset = index1
        address0 = _read_bin_data
        if address0 == FAILURE
          @offset = index1
          address0 = _read_timestamp
          if address0 == FAILURE
            @offset = index1
            address0 = _read_number_long
            if address0 == FAILURE
              @offset = index1
              address0 = _read_number_decimal
              if address0 == FAILURE
                @offset = index1
                address0 = _read_date
                if address0 == FAILURE
                  @offset = index1
                  address0 = _read_db_ref_type
                  if address0 == FAILURE
                    @offset = index1
                  end
                end
              end
            end
          end
        end
      end
      @cache[:mongo_types][index0] = [address0, @offset]
      return address0
    end

    def _read_boolean
      address0, index0 = FAILURE, @offset
      cached = @cache[:boolean][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_true
      if address0 == FAILURE
        @offset = index1
        address0 = _read_false
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:boolean][index0] = [address0, @offset]
      return address0
    end

    def _read_true
      address0, index0 = FAILURE, @offset
      cached = @cache[:true][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 4]
      end
      if chunk0 == "true"
        address0 = @actions.make_true(@input, @offset, @offset + 4)
        @offset = @offset + 4
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"true\""
        end
      end
      @cache[:true][index0] = [address0, @offset]
      return address0
    end

    def _read_false
      address0, index0 = FAILURE, @offset
      cached = @cache[:false][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 5]
      end
      if chunk0 == "false"
        address0 = @actions.make_false(@input, @offset, @offset + 5)
        @offset = @offset + 5
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"false\""
        end
      end
      @cache[:false][index0] = [address0, @offset]
      return address0
    end

    def _read_null
      address0, index0 = FAILURE, @offset
      cached = @cache[:null][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 4]
      end
      if chunk0 == "null"
        address0 = @actions.make_null(@input, @offset, @offset + 4)
        @offset = @offset + 4
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"null\""
        end
      end
      @cache[:null][index0] = [address0, @offset]
      return address0
    end

    def _read_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_double_quote_string
      if address0 == FAILURE
        @offset = index1
        address0 = _read_single_quote_string
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:string][index0] = [address0, @offset]
      return address0
    end

    def _read_identifier
      address0, index0 = FAILURE, @offset
      cached = @cache[:identifier][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_identifier_start
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        remaining0, index2, elements1, address3 = 0, @offset, [], true
        until address3 == FAILURE
          address3 = _read_identifier_part
          unless address3 == FAILURE
            elements1 << address3
            remaining0 -= 1
          end
        end
        if remaining0 <= 0
          address2 = TreeNode.new(@input[index2...@offset], index2, elements1)
          @offset = @offset
        else
          address2 = FAILURE
        end
        unless address2 == FAILURE
          elements0 << address2
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_identifier(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:identifier][index0] = [address0, @offset]
      return address0
    end

    def _read_identifier_start
      address0, index0 = FAILURE, @offset
      cached = @cache[:identifier_start][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_unicode_letter
      if address0 == FAILURE
        @offset = index1
        chunk0 = nil
        if @offset < @input_size
          chunk0 = @input[@offset...@offset + 1]
        end
        if chunk0 == "$"
          address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
          @offset = @offset + 1
        else
          address0 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "\"$\""
          end
        end
        if address0 == FAILURE
          @offset = index1
          chunk1 = nil
          if @offset < @input_size
            chunk1 = @input[@offset...@offset + 1]
          end
          if chunk1 == "_"
            address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
            @offset = @offset + 1
          else
            address0 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "\"_\""
            end
          end
          if address0 == FAILURE
            @offset = index1
            index2, elements0 = @offset, []
            address1 = FAILURE
            chunk2 = nil
            if @offset < @input_size
              chunk2 = @input[@offset...@offset + 1]
            end
            if chunk2 == "\\"
              address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address1 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "\"\\\\\""
              end
            end
            unless address1 == FAILURE
              elements0 << address1
              address2 = FAILURE
              address2 = _read_unicode_escape
              unless address2 == FAILURE
                elements0 << address2
              else
                elements0 = nil
                @offset = index2
              end
            else
              elements0 = nil
              @offset = index2
            end
            if elements0.nil?
              address0 = FAILURE
            else
              address0 = TreeNode7.new(@input[index2...@offset], index2, elements0)
              @offset = @offset
            end
            if address0 == FAILURE
              @offset = index1
            end
          end
        end
      end
      @cache[:identifier_start][index0] = [address0, @offset]
      return address0
    end

    def _read_identifier_part
      address0, index0 = FAILURE, @offset
      cached = @cache[:identifier_part][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_unicode_letter
      if address0 == FAILURE
        @offset = index1
        address0 = _read_unicode_digit
        if address0 == FAILURE
          @offset = index1
          address0 = _read_unicode_conn_punct
          if address0 == FAILURE
            @offset = index1
          end
        end
      end
      @cache[:identifier_part][index0] = [address0, @offset]
      return address0
    end

    def _read_unicode_combining
      address0, index0 = FAILURE, @offset
      cached = @cache[:unicode_combining][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_unicode_non_spacing
      if address0 == FAILURE
        @offset = index1
        address0 = _read_unicode_comb_spacing
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:unicode_combining][index0] = [address0, @offset]
      return address0
    end

    def _read_unicode_escape
      address0, index0 = FAILURE, @offset
      cached = @cache[:unicode_escape][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "u"
        address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"u\""
        end
      end
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        address2 = _read_hex_digit
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_hex_digit
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_hex_digit
            unless address4 == FAILURE
              elements0 << address4
              address5 = FAILURE
              address5 = _read_hex_digit
              unless address5 == FAILURE
                elements0 << address5
              else
                elements0 = nil
                @offset = index1
              end
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode8.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:unicode_escape][index0] = [address0, @offset]
      return address0
    end

    def _read_unicode_letter
      address0, index0 = FAILURE, @offset
      cached = @cache[:unicode_letter][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 =~ /\A[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]/
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "[a-zA-Z\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]"
        end
      end
      @cache[:unicode_letter][index0] = [address0, @offset]
      return address0
    end

    def _read_unicode_digit
      address0, index0 = FAILURE, @offset
      cached = @cache[:unicode_digit][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 =~ /\A[0-9]/
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "[0-9]"
        end
      end
      @cache[:unicode_digit][index0] = [address0, @offset]
      return address0
    end

    def _read_unicode_conn_punct
      address0, index0 = FAILURE, @offset
      cached = @cache[:unicode_conn_punct][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 =~ /\A[_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F]/
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "[_\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]"
        end
      end
      @cache[:unicode_conn_punct][index0] = [address0, @offset]
      return address0
    end

    def _read_double_quote_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:double_quote_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_double_quote
      unless address1 == FAILURE
        address2 = FAILURE
        remaining0, index2, elements1, address3 = 0, @offset, [], true
        until address3 == FAILURE
          index3 = @offset
          index4, elements2 = @offset, []
          address4 = FAILURE
          chunk0 = nil
          if @offset < @input_size
            chunk0 = @input[@offset...@offset + 1]
          end
          if chunk0 == "\\"
            address4 = TreeNode.new(@input[@offset...@offset + 1], @offset)
            @offset = @offset + 1
          else
            address4 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "\"\\\\\""
            end
          end
          unless address4 == FAILURE
            elements2 << address4
            address5 = FAILURE
            chunk1 = nil
            if @offset < @input_size
              chunk1 = @input[@offset...@offset + 1]
            end
            if chunk1 =~ /\A[^\b\t\n\v\f\r]/
              address5 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address5 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "[^\\b\\t\\n\\v\\f\\r]"
              end
            end
            unless address5 == FAILURE
              elements2 << address5
            else
              elements2 = nil
              @offset = index4
            end
          else
            elements2 = nil
            @offset = index4
          end
          if elements2.nil?
            address3 = FAILURE
          else
            address3 = TreeNode.new(@input[index4...@offset], index4, elements2)
            @offset = @offset
          end
          if address3 == FAILURE
            @offset = index3
            chunk2 = nil
            if @offset < @input_size
              chunk2 = @input[@offset...@offset + 1]
            end
            if chunk2 =~ /\A[^"\b\t\n\v\f\r]/
              address3 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address3 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "[^\"\\b\\t\\n\\v\\f\\r]"
              end
            end
            if address3 == FAILURE
              @offset = index3
            end
          end
          unless address3 == FAILURE
            elements1 << address3
            remaining0 -= 1
          end
        end
        if remaining0 <= 0
          address2 = TreeNode.new(@input[index2...@offset], index2, elements1)
          @offset = @offset
        else
          address2 = FAILURE
        end
        unless address2 == FAILURE
          elements0 << address2
          address6 = FAILURE
          address6 = _read_double_quote
          unless address6 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:double_quote_string][index0] = [address0, @offset]
      return address0
    end

    def _read_single_quote_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:single_quote_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_single_quote
      unless address1 == FAILURE
        address2 = FAILURE
        remaining0, index2, elements1, address3 = 0, @offset, [], true
        until address3 == FAILURE
          index3 = @offset
          index4, elements2 = @offset, []
          address4 = FAILURE
          chunk0 = nil
          if @offset < @input_size
            chunk0 = @input[@offset...@offset + 1]
          end
          if chunk0 == "\\"
            address4 = TreeNode.new(@input[@offset...@offset + 1], @offset)
            @offset = @offset + 1
          else
            address4 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "\"\\\\\""
            end
          end
          unless address4 == FAILURE
            elements2 << address4
            address5 = FAILURE
            chunk1 = nil
            if @offset < @input_size
              chunk1 = @input[@offset...@offset + 1]
            end
            if chunk1 =~ /\A[^\b\t\n\v\f\r]/
              address5 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address5 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "[^\\b\\t\\n\\v\\f\\r]"
              end
            end
            unless address5 == FAILURE
              elements2 << address5
            else
              elements2 = nil
              @offset = index4
            end
          else
            elements2 = nil
            @offset = index4
          end
          if elements2.nil?
            address3 = FAILURE
          else
            address3 = TreeNode.new(@input[index4...@offset], index4, elements2)
            @offset = @offset
          end
          if address3 == FAILURE
            @offset = index3
            chunk2 = nil
            if @offset < @input_size
              chunk2 = @input[@offset...@offset + 1]
            end
            if chunk2 =~ /\A[^'\b\t\n\v\f\r]/
              address3 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address3 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "[^'\\b\\t\\n\\v\\f\\r]"
              end
            end
            if address3 == FAILURE
              @offset = index3
            end
          end
          unless address3 == FAILURE
            elements1 << address3
            remaining0 -= 1
          end
        end
        if remaining0 <= 0
          address2 = TreeNode.new(@input[index2...@offset], index2, elements1)
          @offset = @offset
        else
          address2 = FAILURE
        end
        unless address2 == FAILURE
          elements0 << address2
          address6 = FAILURE
          address6 = _read_single_quote
          unless address6 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:single_quote_string][index0] = [address0, @offset]
      return address0
    end

    def _read_hex_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:hex_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_hex_single_quote
      if address0 == FAILURE
        @offset = index1
        address0 = _read_hex_double_quote
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:hex_string][index0] = [address0, @offset]
      return address0
    end

    def _read_hex_value
      address0, index0 = FAILURE, @offset
      cached = @cache[:hex_value][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      remaining0, index1, elements0, address1 = 1, @offset, [], true
      until address1 == FAILURE
        address1 = _read_hex_digit
        unless address1 == FAILURE
          elements0 << address1
          remaining0 -= 1
        end
      end
      if remaining0 <= 0
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      else
        address0 = FAILURE
      end
      @cache[:hex_value][index0] = [address0, @offset]
      return address0
    end

    def _read_hex_single_quote
      address0, index0 = FAILURE, @offset
      cached = @cache[:hex_single_quote][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_single_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_hex_value
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_single_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:hex_single_quote][index0] = [address0, @offset]
      return address0
    end

    def _read_hex_double_quote
      address0, index0 = FAILURE, @offset
      cached = @cache[:hex_double_quote][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_double_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_hex_value
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_double_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:hex_double_quote][index0] = [address0, @offset]
      return address0
    end

    def _read_integer_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:integer_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_integer_string_single
      if address0 == FAILURE
        @offset = index1
        address0 = _read_integer_string_double
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:integer_string][index0] = [address0, @offset]
      return address0
    end

    def _read_integer_string_single
      address0, index0 = FAILURE, @offset
      cached = @cache[:integer_string_single][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_single_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_integer_number
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_single_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_numeric_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:integer_string_single][index0] = [address0, @offset]
      return address0
    end

    def _read_integer_string_double
      address0, index0 = FAILURE, @offset
      cached = @cache[:integer_string_double][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_double_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_integer_number
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_double_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_numeric_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:integer_string_double][index0] = [address0, @offset]
      return address0
    end

    def _read_number_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_number_string_single
      if address0 == FAILURE
        @offset = index1
        address0 = _read_number_string_double
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:number_string][index0] = [address0, @offset]
      return address0
    end

    def _read_number_string_single
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_string_single][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_single_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_number
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_single_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_numeric_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:number_string_single][index0] = [address0, @offset]
      return address0
    end

    def _read_number_string_double
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_string_double][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_double_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_number
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_double_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_numeric_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:number_string_double][index0] = [address0, @offset]
      return address0
    end

    def _read_regexp_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:regexp_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_slash
      unless address1 == FAILURE
        address2 = FAILURE
        remaining0, index2, elements1, address3 = 0, @offset, [], true
        until address3 == FAILURE
          index3 = @offset
          index4, elements2 = @offset, []
          address4 = FAILURE
          chunk0 = nil
          if @offset < @input_size
            chunk0 = @input[@offset...@offset + 1]
          end
          if chunk0 == "\\"
            address4 = TreeNode.new(@input[@offset...@offset + 1], @offset)
            @offset = @offset + 1
          else
            address4 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "\"\\\\\""
            end
          end
          unless address4 == FAILURE
            elements2 << address4
            address5 = FAILURE
            if @offset < @input_size
              address5 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address5 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "<any char>"
              end
            end
            unless address5 == FAILURE
              elements2 << address5
            else
              elements2 = nil
              @offset = index4
            end
          else
            elements2 = nil
            @offset = index4
          end
          if elements2.nil?
            address3 = FAILURE
          else
            address3 = TreeNode.new(@input[index4...@offset], index4, elements2)
            @offset = @offset
          end
          if address3 == FAILURE
            @offset = index3
            chunk1 = nil
            if @offset < @input_size
              chunk1 = @input[@offset...@offset + 1]
            end
            if chunk1 =~ /\A[^\/]/
              address3 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address3 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "[^\\/]"
              end
            end
            if address3 == FAILURE
              @offset = index3
            end
          end
          unless address3 == FAILURE
            elements1 << address3
            remaining0 -= 1
          end
        end
        if remaining0 <= 0
          address2 = TreeNode.new(@input[index2...@offset], index2, elements1)
          @offset = @offset
        else
          address2 = FAILURE
        end
        unless address2 == FAILURE
          elements0 << address2
          address6 = FAILURE
          address6 = _read_slash
          unless address6 == FAILURE
            address7 = FAILURE
            index5 = @offset
            address7 = _read_regexp_options
            if address7 == FAILURE
              address7 = TreeNode.new(@input[index5...index5], index5)
              @offset = index5
            end
            unless address7 == FAILURE
              elements0 << address7
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_regexp(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:regexp_string][index0] = [address0, @offset]
      return address0
    end

    def _read_regexp_options
      address0, index0 = FAILURE, @offset
      cached = @cache[:regexp_options][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      remaining0, index1, elements0, address1 = 1, @offset, [], true
      until address1 == FAILURE
        chunk0 = nil
        if @offset < @input_size
          chunk0 = @input[@offset...@offset + 1]
        end
        if chunk0 =~ /\A[gims]/
          address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
          @offset = @offset + 1
        else
          address1 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "[gims]"
          end
        end
        unless address1 == FAILURE
          elements0 << address1
          remaining0 -= 1
        end
      end
      if remaining0 <= 0
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      else
        address0 = FAILURE
      end
      @cache[:regexp_options][index0] = [address0, @offset]
      return address0
    end

    def _read_base64_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:base64_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_base64_single_quote
      if address0 == FAILURE
        @offset = index1
        address0 = _read_base64_dobule_quote
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:base64_string][index0] = [address0, @offset]
      return address0
    end

    def _read_base64_value
      address0, index0 = FAILURE, @offset
      cached = @cache[:base64_value][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      remaining0, index2, elements1, address2 = 1, @offset, [], true
      until address2 == FAILURE
        chunk0 = nil
        if @offset < @input_size
          chunk0 = @input[@offset...@offset + 1]
        end
        if chunk0 =~ /\A[a-zA-Z0-9+\/]/
          address2 = TreeNode.new(@input[@offset...@offset + 1], @offset)
          @offset = @offset + 1
        else
          address2 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "[a-zA-Z0-9+\\/]"
          end
        end
        unless address2 == FAILURE
          elements1 << address2
          remaining0 -= 1
        end
      end
      if remaining0 <= 0
        address1 = TreeNode.new(@input[index2...@offset], index2, elements1)
        @offset = @offset
      else
        address1 = FAILURE
      end
      unless address1 == FAILURE
        elements0 << address1
        address3 = FAILURE
        index3 = @offset
        index4 = @offset
        chunk1 = nil
        if @offset < @input_size
          chunk1 = @input[@offset...@offset + 1]
        end
        if chunk1 == "="
          address3 = TreeNode.new(@input[@offset...@offset + 1], @offset)
          @offset = @offset + 1
        else
          address3 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "\"=\""
          end
        end
        if address3 == FAILURE
          @offset = index4
          chunk2 = nil
          if @offset < @input_size
            chunk2 = @input[@offset...@offset + 2]
          end
          if chunk2 == "=="
            address3 = TreeNode.new(@input[@offset...@offset + 2], @offset)
            @offset = @offset + 2
          else
            address3 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "\"==\""
            end
          end
          if address3 == FAILURE
            @offset = index4
          end
        end
        if address3 == FAILURE
          address3 = TreeNode.new(@input[index3...index3], index3)
          @offset = index3
        end
        unless address3 == FAILURE
          elements0 << address3
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:base64_value][index0] = [address0, @offset]
      return address0
    end

    def _read_base64_single_quote
      address0, index0 = FAILURE, @offset
      cached = @cache[:base64_single_quote][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_single_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_base64_value
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_single_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:base64_single_quote][index0] = [address0, @offset]
      return address0
    end

    def _read_base64_dobule_quote
      address0, index0 = FAILURE, @offset
      cached = @cache[:base64_dobule_quote][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_double_quote
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_base64_value
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read_double_quote
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:base64_dobule_quote][index0] = [address0, @offset]
      return address0
    end

    def _read_number
      address0, index0 = FAILURE, @offset
      cached = @cache[:number][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      index2 = @offset
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "-"
        address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"-\""
        end
      end
      if address1 == FAILURE
        address1 = TreeNode.new(@input[index2...index2], index2)
        @offset = index2
      end
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        address2 = _read_integer
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          index3 = @offset
          address3 = _read_fraction
          if address3 == FAILURE
            address3 = TreeNode.new(@input[index3...index3], index3)
            @offset = index3
          end
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            index4 = @offset
            address4 = _read_exponent
            if address4 == FAILURE
              address4 = TreeNode.new(@input[index4...index4], index4)
              @offset = index4
            end
            unless address4 == FAILURE
              elements0 << address4
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_number(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:number][index0] = [address0, @offset]
      return address0
    end

    def _read_number_as_string
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_as_string][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      index2 = @offset
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "-"
        address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"-\""
        end
      end
      if address1 == FAILURE
        address1 = TreeNode.new(@input[index2...index2], index2)
        @offset = index2
      end
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        address2 = _read_integer
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          index3 = @offset
          address3 = _read_fraction
          if address3 == FAILURE
            address3 = TreeNode.new(@input[index3...index3], index3)
            @offset = index3
          end
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            index4 = @offset
            address4 = _read_exponent
            if address4 == FAILURE
              address4 = TreeNode.new(@input[index4...index4], index4)
              @offset = index4
            end
            unless address4 == FAILURE
              elements0 << address4
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_number_as_string(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:number_as_string][index0] = [address0, @offset]
      return address0
    end

    def _read_integer
      address0, index0 = FAILURE, @offset
      cached = @cache[:integer][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "0"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"0\""
        end
      end
      if address0 == FAILURE
        @offset = index1
        index2, elements0 = @offset, []
        address1 = FAILURE
        chunk1 = nil
        if @offset < @input_size
          chunk1 = @input[@offset...@offset + 1]
        end
        if chunk1 =~ /\A[1-9]/
          address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
          @offset = @offset + 1
        else
          address1 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "[1-9]"
          end
        end
        unless address1 == FAILURE
          elements0 << address1
          address2 = FAILURE
          remaining0, index3, elements1, address3 = 0, @offset, [], true
          until address3 == FAILURE
            chunk2 = nil
            if @offset < @input_size
              chunk2 = @input[@offset...@offset + 1]
            end
            if chunk2 =~ /\A[0-9]/
              address3 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address3 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "[0-9]"
              end
            end
            unless address3 == FAILURE
              elements1 << address3
              remaining0 -= 1
            end
          end
          if remaining0 <= 0
            address2 = TreeNode.new(@input[index3...@offset], index3, elements1)
            @offset = @offset
          else
            address2 = FAILURE
          end
          unless address2 == FAILURE
            elements0 << address2
          else
            elements0 = nil
            @offset = index2
          end
        else
          elements0 = nil
          @offset = index2
        end
        if elements0.nil?
          address0 = FAILURE
        else
          address0 = TreeNode.new(@input[index2...@offset], index2, elements0)
          @offset = @offset
        end
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:integer][index0] = [address0, @offset]
      return address0
    end

    def _read_fraction
      address0, index0 = FAILURE, @offset
      cached = @cache[:fraction][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "."
        address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\".\""
        end
      end
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        remaining0, index2, elements1, address3 = 1, @offset, [], true
        until address3 == FAILURE
          chunk1 = nil
          if @offset < @input_size
            chunk1 = @input[@offset...@offset + 1]
          end
          if chunk1 =~ /\A[0-9]/
            address3 = TreeNode.new(@input[@offset...@offset + 1], @offset)
            @offset = @offset + 1
          else
            address3 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "[0-9]"
            end
          end
          unless address3 == FAILURE
            elements1 << address3
            remaining0 -= 1
          end
        end
        if remaining0 <= 0
          address2 = TreeNode.new(@input[index2...@offset], index2, elements1)
          @offset = @offset
        else
          address2 = FAILURE
        end
        unless address2 == FAILURE
          elements0 << address2
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:fraction][index0] = [address0, @offset]
      return address0
    end

    def _read_exponent
      address0, index0 = FAILURE, @offset
      cached = @cache[:exponent][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      index2 = @offset
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "e"
        address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"e\""
        end
      end
      if address1 == FAILURE
        @offset = index2
        chunk1 = nil
        if @offset < @input_size
          chunk1 = @input[@offset...@offset + 1]
        end
        if chunk1 == "E"
          address1 = TreeNode.new(@input[@offset...@offset + 1], @offset)
          @offset = @offset + 1
        else
          address1 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "\"E\""
          end
        end
        if address1 == FAILURE
          @offset = index2
        end
      end
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        index3 = @offset
        chunk2 = nil
        if @offset < @input_size
          chunk2 = @input[@offset...@offset + 1]
        end
        if chunk2 == "+"
          address2 = TreeNode.new(@input[@offset...@offset + 1], @offset)
          @offset = @offset + 1
        else
          address2 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "\"+\""
          end
        end
        if address2 == FAILURE
          @offset = index3
          chunk3 = nil
          if @offset < @input_size
            chunk3 = @input[@offset...@offset + 1]
          end
          if chunk3 == "-"
            address2 = TreeNode.new(@input[@offset...@offset + 1], @offset)
            @offset = @offset + 1
          else
            address2 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "\"-\""
            end
          end
          if address2 == FAILURE
            @offset = index3
            chunk4 = nil
            if @offset < @input_size
              chunk4 = @input[@offset...@offset + 0]
            end
            if chunk4 == ""
              address2 = TreeNode.new(@input[@offset...@offset + 0], @offset)
              @offset = @offset + 0
            else
              address2 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "\"\""
              end
            end
            if address2 == FAILURE
              @offset = index3
            end
          end
        end
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          remaining0, index4, elements1, address4 = 1, @offset, [], true
          until address4 == FAILURE
            chunk5 = nil
            if @offset < @input_size
              chunk5 = @input[@offset...@offset + 1]
            end
            if chunk5 =~ /\A[0-9]/
              address4 = TreeNode.new(@input[@offset...@offset + 1], @offset)
              @offset = @offset + 1
            else
              address4 = FAILURE
              if @offset > @failure
                @failure = @offset
                @expected = []
              end
              if @offset == @failure
                @expected << "[0-9]"
              end
            end
            unless address4 == FAILURE
              elements1 << address4
              remaining0 -= 1
            end
          end
          if remaining0 <= 0
            address3 = TreeNode.new(@input[index4...@offset], index4, elements1)
            @offset = @offset
          else
            address3 = FAILURE
          end
          unless address3 == FAILURE
            elements0 << address3
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:exponent][index0] = [address0, @offset]
      return address0
    end

    def _read_integer_number
      address0, index0 = FAILURE, @offset
      cached = @cache[:integer_number][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_integer
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        chunk0 = nil
        if @offset < @input_size
          chunk0 = @input[@offset...@offset + 0]
        end
        if chunk0 == ""
          address2 = TreeNode.new(@input[@offset...@offset + 0], @offset)
          @offset = @offset + 0
        else
          address2 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "\"\""
          end
        end
        unless address2 == FAILURE
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_number(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:integer_number][index0] = [address0, @offset]
      return address0
    end

    def _read_min_key
      address0, index0 = FAILURE, @offset
      cached = @cache[:min_key][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 6]
      end
      if chunk0 == "MinKey"
        address0 = @actions.make_min_key(@input, @offset, @offset + 6)
        @offset = @offset + 6
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"MinKey\""
        end
      end
      @cache[:min_key][index0] = [address0, @offset]
      return address0
    end

    def _read_max_key
      address0, index0 = FAILURE, @offset
      cached = @cache[:max_key][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 6]
      end
      if chunk0 == "MaxKey"
        address0 = @actions.make_max_key(@input, @offset, @offset + 6)
        @offset = @offset + 6
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"MaxKey\""
        end
      end
      @cache[:max_key][index0] = [address0, @offset]
      return address0
    end

    def _read_undefined
      address0, index0 = FAILURE, @offset
      cached = @cache[:undefined][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 9]
      end
      if chunk0 == "undefined"
        address0 = @actions.make_undefined(@input, @offset, @offset + 9)
        @offset = @offset + 9
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"undefined\""
        end
      end
      @cache[:undefined][index0] = [address0, @offset]
      return address0
    end

    def _read_object_id
      address0, index0 = FAILURE, @offset
      cached = @cache[:object_id][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 8]
      end
      if chunk0 == "ObjectId"
        address1 = TreeNode.new(@input[@offset...@offset + 8], @offset)
        @offset = @offset + 8
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"ObjectId\""
        end
      end
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_type_open
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read_hex_string
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_type_close
            unless address4 == FAILURE
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_object_id(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:object_id][index0] = [address0, @offset]
      return address0
    end

    def _read_bin_data_type
      address0, index0 = FAILURE, @offset
      cached = @cache[:bin_data_type][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_string
      if address0 == FAILURE
        @offset = index1
        address0 = _read_integer_number
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:bin_data_type][index0] = [address0, @offset]
      return address0
    end

    def _read_bin_data
      address0, index0 = FAILURE, @offset
      cached = @cache[:bin_data][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 7]
      end
      if chunk0 == "BinData"
        address1 = TreeNode.new(@input[@offset...@offset + 7], @offset)
        @offset = @offset + 7
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"BinData\""
        end
      end
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_type_open
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read_bin_data_type
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_delimiter
            unless address4 == FAILURE
              address5 = FAILURE
              address5 = _read_base64_string
              unless address5 == FAILURE
                elements0 << address5
                address6 = FAILURE
                address6 = _read_type_close
                unless address6 == FAILURE
                else
                  elements0 = nil
                  @offset = index1
                end
              else
                elements0 = nil
                @offset = index1
              end
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_bin_data(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:bin_data][index0] = [address0, @offset]
      return address0
    end

    def _read_timestamp
      address0, index0 = FAILURE, @offset
      cached = @cache[:timestamp][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 9]
      end
      if chunk0 == "Timestamp"
        address1 = TreeNode.new(@input[@offset...@offset + 9], @offset)
        @offset = @offset + 9
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"Timestamp\""
        end
      end
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_type_open
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read_integer_number
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_delimiter
            unless address4 == FAILURE
              address5 = FAILURE
              address5 = _read_integer_number
              unless address5 == FAILURE
                elements0 << address5
                address6 = FAILURE
                address6 = _read_type_close
                unless address6 == FAILURE
                else
                  elements0 = nil
                  @offset = index1
                end
              else
                elements0 = nil
                @offset = index1
              end
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_timestamp(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:timestamp][index0] = [address0, @offset]
      return address0
    end

    def _read_number_long_value
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_long_value][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_integer_number
      if address0 == FAILURE
        @offset = index1
        address0 = _read_integer_string
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:number_long_value][index0] = [address0, @offset]
      return address0
    end

    def _read_number_long
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_long][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 10]
      end
      if chunk0 == "NumberLong"
        address1 = TreeNode.new(@input[@offset...@offset + 10], @offset)
        @offset = @offset + 10
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"NumberLong\""
        end
      end
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_type_open
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read_number_long_value
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_type_close
            unless address4 == FAILURE
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_number_long(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:number_long][index0] = [address0, @offset]
      return address0
    end

    def _read_number_decimal_value
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_decimal_value][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_number_as_string
      if address0 == FAILURE
        @offset = index1
        address0 = _read_number_string
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:number_decimal_value][index0] = [address0, @offset]
      return address0
    end

    def _read_number_decimal
      address0, index0 = FAILURE, @offset
      cached = @cache[:number_decimal][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 13]
      end
      if chunk0 == "NumberDecimal"
        address1 = TreeNode.new(@input[@offset...@offset + 13], @offset)
        @offset = @offset + 13
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"NumberDecimal\""
        end
      end
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_type_open
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read_number_decimal_value
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_type_close
            unless address4 == FAILURE
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_number_decimal(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:number_decimal][index0] = [address0, @offset]
      return address0
    end

    def _read_date_type
      address0, index0 = FAILURE, @offset
      cached = @cache[:date_type][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      index2, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 3]
      end
      if chunk0 == "new"
        address1 = TreeNode.new(@input[@offset...@offset + 3], @offset)
        @offset = @offset + 3
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"new\""
        end
      end
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        remaining0, index3, elements1, address3 = 1, @offset, [], true
        until address3 == FAILURE
          address3 = _read_space
          unless address3 == FAILURE
            elements1 << address3
            remaining0 -= 1
          end
        end
        if remaining0 <= 0
          address2 = TreeNode.new(@input[index3...@offset], index3, elements1)
          @offset = @offset
        else
          address2 = FAILURE
        end
        unless address2 == FAILURE
          elements0 << address2
          address4 = FAILURE
          chunk1 = nil
          if @offset < @input_size
            chunk1 = @input[@offset...@offset + 4]
          end
          if chunk1 == "Date"
            address4 = TreeNode.new(@input[@offset...@offset + 4], @offset)
            @offset = @offset + 4
          else
            address4 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "\"Date\""
            end
          end
          unless address4 == FAILURE
            elements0 << address4
          else
            elements0 = nil
            @offset = index2
          end
        else
          elements0 = nil
          @offset = index2
        end
      else
        elements0 = nil
        @offset = index2
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index2...@offset], index2, elements0)
        @offset = @offset
      end
      if address0 == FAILURE
        @offset = index1
        chunk2 = nil
        if @offset < @input_size
          chunk2 = @input[@offset...@offset + 7]
        end
        if chunk2 == "ISODate"
          address0 = TreeNode.new(@input[@offset...@offset + 7], @offset)
          @offset = @offset + 7
        else
          address0 = FAILURE
          if @offset > @failure
            @failure = @offset
            @expected = []
          end
          if @offset == @failure
            @expected << "\"ISODate\""
          end
        end
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:date_type][index0] = [address0, @offset]
      return address0
    end

    def _read_date_value
      address0, index0 = FAILURE, @offset
      cached = @cache[:date_value][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1 = @offset
      address0 = _read_integer_number
      if address0 == FAILURE
        @offset = index1
        address0 = _read_string
        if address0 == FAILURE
          @offset = index1
        end
      end
      @cache[:date_value][index0] = [address0, @offset]
      return address0
    end

    def _read_date
      address0, index0 = FAILURE, @offset
      cached = @cache[:date][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read_date_type
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_type_open
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read_date_value
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_type_close
            unless address4 == FAILURE
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_date(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:date][index0] = [address0, @offset]
      return address0
    end

    def _read_db_ref_type
      address0, index0 = FAILURE, @offset
      cached = @cache[:db_ref_type][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 5]
      end
      if chunk0 == "DBRef"
        address1 = TreeNode.new(@input[@offset...@offset + 5], @offset)
        @offset = @offset + 5
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"DBRef\""
        end
      end
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_type_open
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read_string
          unless address3 == FAILURE
            elements0 << address3
            address4 = FAILURE
            address4 = _read_delimiter
            unless address4 == FAILURE
              address5 = FAILURE
              address5 = _read_string
              unless address5 == FAILURE
                elements0 << address5
                address6 = FAILURE
                address6 = _read_type_close
                unless address6 == FAILURE
                else
                  elements0 = nil
                  @offset = index1
                end
              else
                elements0 = nil
                @offset = index1
              end
            else
              elements0 = nil
              @offset = index1
            end
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = @actions.make_db_ref(@input, index1, @offset, elements0)
        @offset = @offset
      end
      @cache[:db_ref_type][index0] = [address0, @offset]
      return address0
    end

    def _read_single_quote
      address0, index0 = FAILURE, @offset
      cached = @cache[:single_quote][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "'"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"'\""
        end
      end
      @cache[:single_quote][index0] = [address0, @offset]
      return address0
    end

    def _read_double_quote
      address0, index0 = FAILURE, @offset
      cached = @cache[:double_quote][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "\""
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "'\"'"
        end
      end
      @cache[:double_quote][index0] = [address0, @offset]
      return address0
    end

    def _read_left_paren
      address0, index0 = FAILURE, @offset
      cached = @cache[:left_paren][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "("
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "'('"
        end
      end
      @cache[:left_paren][index0] = [address0, @offset]
      return address0
    end

    def _read_right_paren
      address0, index0 = FAILURE, @offset
      cached = @cache[:right_paren][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == ")"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "')'"
        end
      end
      @cache[:right_paren][index0] = [address0, @offset]
      return address0
    end

    def _read_left_brace
      address0, index0 = FAILURE, @offset
      cached = @cache[:left_brace][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "{"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "'{'"
        end
      end
      @cache[:left_brace][index0] = [address0, @offset]
      return address0
    end

    def _read_right_brace
      address0, index0 = FAILURE, @offset
      cached = @cache[:right_brace][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "}"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "'}'"
        end
      end
      @cache[:right_brace][index0] = [address0, @offset]
      return address0
    end

    def _read_left_bracket
      address0, index0 = FAILURE, @offset
      cached = @cache[:left_bracket][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "["
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "'['"
        end
      end
      @cache[:left_bracket][index0] = [address0, @offset]
      return address0
    end

    def _read_right_bracket
      address0, index0 = FAILURE, @offset
      cached = @cache[:right_bracket][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "]"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "']'"
        end
      end
      @cache[:right_bracket][index0] = [address0, @offset]
      return address0
    end

    def _read_comma
      address0, index0 = FAILURE, @offset
      cached = @cache[:comma][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == ","
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "','"
        end
      end
      @cache[:comma][index0] = [address0, @offset]
      return address0
    end

    def _read_colon
      address0, index0 = FAILURE, @offset
      cached = @cache[:colon][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == ":"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "':'"
        end
      end
      @cache[:colon][index0] = [address0, @offset]
      return address0
    end

    def _read_slash
      address0, index0 = FAILURE, @offset
      cached = @cache[:slash][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 == "/"
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "'/'"
        end
      end
      @cache[:slash][index0] = [address0, @offset]
      return address0
    end

    def _read_space
      address0, index0 = FAILURE, @offset
      cached = @cache[:space][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 =~ /\A[\s]/
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "[\\s]"
        end
      end
      @cache[:space][index0] = [address0, @offset]
      return address0
    end

    def _read_new_line
      address0, index0 = FAILURE, @offset
      cached = @cache[:new_line][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 =~ /\A[\n]/
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "[\\n]"
        end
      end
      @cache[:new_line][index0] = [address0, @offset]
      return address0
    end

    def _read_hex_digit
      address0, index0 = FAILURE, @offset
      cached = @cache[:hex_digit][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 1]
      end
      if chunk0 =~ /\A[a-fA-F0-9]/
        address0 = TreeNode.new(@input[@offset...@offset + 1], @offset)
        @offset = @offset + 1
      else
        address0 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "[a-fA-F0-9]"
        end
      end
      @cache[:hex_digit][index0] = [address0, @offset]
      return address0
    end

    def _read_comment
      address0, index0 = FAILURE, @offset
      cached = @cache[:comment][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      chunk0 = nil
      if @offset < @input_size
        chunk0 = @input[@offset...@offset + 2]
      end
      if chunk0 == "//"
        address1 = TreeNode.new(@input[@offset...@offset + 2], @offset)
        @offset = @offset + 2
      else
        address1 = FAILURE
        if @offset > @failure
          @failure = @offset
          @expected = []
        end
        if @offset == @failure
          @expected << "\"//\""
        end
      end
      unless address1 == FAILURE
        elements0 << address1
        address2 = FAILURE
        remaining0, index2, elements1, address3 = 0, @offset, [], true
        until address3 == FAILURE
          chunk1 = nil
          if @offset < @input_size
            chunk1 = @input[@offset...@offset + 1]
          end
          if chunk1 =~ /\A[^\n]/
            address3 = TreeNode.new(@input[@offset...@offset + 1], @offset)
            @offset = @offset + 1
          else
            address3 = FAILURE
            if @offset > @failure
              @failure = @offset
              @expected = []
            end
            if @offset == @failure
              @expected << "[^\\n]"
            end
          end
          unless address3 == FAILURE
            elements1 << address3
            remaining0 -= 1
          end
        end
        if remaining0 <= 0
          address2 = TreeNode.new(@input[index2...@offset], index2, elements1)
          @offset = @offset
        else
          address2 = FAILURE
        end
        unless address2 == FAILURE
          elements0 << address2
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:comment][index0] = [address0, @offset]
      return address0
    end

    def _read___
      address0, index0 = FAILURE, @offset
      cached = @cache[:__][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      remaining0, index1, elements0, address1 = 0, @offset, [], true
      until address1 == FAILURE
        index2 = @offset
        address1 = _read_space
        if address1 == FAILURE
          @offset = index2
          address1 = _read_new_line
          if address1 == FAILURE
            @offset = index2
            address1 = _read_comment
            if address1 == FAILURE
              @offset = index2
            end
          end
        end
        unless address1 == FAILURE
          elements0 << address1
          remaining0 -= 1
        end
      end
      if remaining0 <= 0
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      else
        address0 = FAILURE
      end
      @cache[:__][index0] = [address0, @offset]
      return address0
    end

    def _read_delimiter
      address0, index0 = FAILURE, @offset
      cached = @cache[:delimiter][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_comma
        unless address2 == FAILURE
          elements0 << address2
          address3 = FAILURE
          address3 = _read___
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode27.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:delimiter][index0] = [address0, @offset]
      return address0
    end

    def _read_assignment
      address0, index0 = FAILURE, @offset
      cached = @cache[:assignment][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_colon
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read___
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:assignment][index0] = [address0, @offset]
      return address0
    end

    def _read_object_open
      address0, index0 = FAILURE, @offset
      cached = @cache[:object_open][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_left_brace
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read___
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:object_open][index0] = [address0, @offset]
      return address0
    end

    def _read_object_close
      address0, index0 = FAILURE, @offset
      cached = @cache[:object_close][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_right_brace
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read___
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:object_close][index0] = [address0, @offset]
      return address0
    end

    def _read_array_open
      address0, index0 = FAILURE, @offset
      cached = @cache[:array_open][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_left_bracket
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read___
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:array_open][index0] = [address0, @offset]
      return address0
    end

    def _read_array_close
      address0, index0 = FAILURE, @offset
      cached = @cache[:array_close][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      address1 = _read___
      unless address1 == FAILURE
        address2 = FAILURE
        address2 = _read_right_bracket
        unless address2 == FAILURE
          address3 = FAILURE
          address3 = _read___
          unless address3 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:array_close][index0] = [address0, @offset]
      return address0
    end

    def _read_type_open
      address0, index0 = FAILURE, @offset
      cached = @cache[:type_open][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      remaining0, index2, elements1, address2 = 0, @offset, [], true
      until address2 == FAILURE
        address2 = _read_space
        unless address2 == FAILURE
          elements1 << address2
          remaining0 -= 1
        end
      end
      if remaining0 <= 0
        address1 = TreeNode.new(@input[index2...@offset], index2, elements1)
        @offset = @offset
      else
        address1 = FAILURE
      end
      unless address1 == FAILURE
        address3 = FAILURE
        address3 = _read_left_paren
        unless address3 == FAILURE
          address4 = FAILURE
          remaining1, index3, elements2, address5 = 0, @offset, [], true
          until address5 == FAILURE
            address5 = _read_space
            unless address5 == FAILURE
              elements2 << address5
              remaining1 -= 1
            end
          end
          if remaining1 <= 0
            address4 = TreeNode.new(@input[index3...@offset], index3, elements2)
            @offset = @offset
          else
            address4 = FAILURE
          end
          unless address4 == FAILURE
          else
            elements0 = nil
            @offset = index1
          end
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:type_open][index0] = [address0, @offset]
      return address0
    end

    def _read_type_close
      address0, index0 = FAILURE, @offset
      cached = @cache[:type_close][index0]
      if cached
        @offset = cached[1]
        return cached[0]
      end
      index1, elements0 = @offset, []
      address1 = FAILURE
      remaining0, index2, elements1, address2 = 0, @offset, [], true
      until address2 == FAILURE
        address2 = _read_space
        unless address2 == FAILURE
          elements1 << address2
          remaining0 -= 1
        end
      end
      if remaining0 <= 0
        address1 = TreeNode.new(@input[index2...@offset], index2, elements1)
        @offset = @offset
      else
        address1 = FAILURE
      end
      unless address1 == FAILURE
        address3 = FAILURE
        address3 = _read_right_paren
        unless address3 == FAILURE
        else
          elements0 = nil
          @offset = index1
        end
      else
        elements0 = nil
        @offset = index1
      end
      if elements0.nil?
        address0 = FAILURE
      else
        address0 = TreeNode.new(@input[index1...@offset], index1, elements0)
        @offset = @offset
      end
      @cache[:type_close][index0] = [address0, @offset]
      return address0
    end
  end

  class Parser
    include Grammar

    def initialize(input, actions, types)
      @input = input
      @input_size = input.size
      @actions = actions
      @types = types
      @offset = 0
      @cache = Hash.new { |h,k| h[k] = {} }
      @failure = 0
      @expected = []
    end

    def parse
      tree = _read_root
      if tree != FAILURE and @offset == @input_size
        return tree
      end
      if @expected.empty?
        @failure = @offset
        @expected << "<EOF>"
      end
      raise ParseError, Parser.format_error(@input, @failure, @expected)
    end

    def self.format_error(input, offset, expected)
      lines, line_no, position = input.split(/\n/), 0, 0
      while position <= offset
        position += lines[line_no].size + 1
        line_no += 1
      end
      message, line = "Line #{line_no}: expected #{expected * ", "}\n", lines[line_no - 1]
      message += "#{line}\n"
      position -= line.size + 1
      message += " " * (offset - position)
      return message + "^"
    end
  end

  def self.parse(input, options = {})
    parser = Parser.new(input, options[:actions], options[:types])
    parser.parse
  end
end
