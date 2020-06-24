/**
 * This file was generated from src/ejson.peg
 * See http://canopy.jcoglan.com/ for documentation.
 */

(function() {
  'use strict';

  var extend = function(destination, source) {
    if (!destination || !source) return destination;
    for (var key in source) {
      if (destination[key] !== source[key])
        destination[key] = source[key];
    }
    return destination;
  };

  var formatError = function(input, offset, expected) {
    var lines = input.split(/\n/g),
        lineNo = 0,
        position = 0;

    while (position <= offset) {
      position += lines[lineNo].length + 1;
      lineNo += 1;
    }
    var message = 'Line ' + lineNo + ': expected ' + expected.join(', ') + '\n',
        line = lines[lineNo - 1];

    message += line + '\n';
    position -= line.length + 1;

    while (position < offset) {
      message += ' ';
      position += 1;
    }
    return message + '^';
  };

  var inherit = function(subclass, parent) {
    var chain = function() {};
    chain.prototype = parent.prototype;
    subclass.prototype = new chain();
    subclass.prototype.constructor = subclass;
  };

  var TreeNode = function(text, offset, elements) {
    this.text = text;
    this.offset = offset;
    this.elements = elements || [];
  };

  TreeNode.prototype.forEach = function(block, context) {
    for (var el = this.elements, i = 0, n = el.length; i < n; i++) {
      block.call(context, el[i], i, el);
    }
  };

  var TreeNode1 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['value'] = elements[1];
  };
  inherit(TreeNode1, TreeNode);

  var TreeNode2 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['pair'] = elements[0];
  };
  inherit(TreeNode2, TreeNode);

  var TreeNode3 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['pair'] = elements[0];
  };
  inherit(TreeNode3, TreeNode);

  var TreeNode4 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['value'] = elements[0];
  };
  inherit(TreeNode4, TreeNode);

  var TreeNode5 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['value'] = elements[0];
  };
  inherit(TreeNode5, TreeNode);

  var TreeNode6 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['identifier_start'] = elements[0];
  };
  inherit(TreeNode6, TreeNode);

  var TreeNode7 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['unicode_escape'] = elements[1];
  };
  inherit(TreeNode7, TreeNode);

  var TreeNode8 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['hex_digit'] = elements[4];
  };
  inherit(TreeNode8, TreeNode);

  var TreeNode9 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['hex_value'] = elements[0];
  };
  inherit(TreeNode9, TreeNode);

  var TreeNode10 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['hex_value'] = elements[0];
  };
  inherit(TreeNode10, TreeNode);

  var TreeNode11 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['integer_number'] = elements[0];
  };
  inherit(TreeNode11, TreeNode);

  var TreeNode12 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['integer_number'] = elements[0];
  };
  inherit(TreeNode12, TreeNode);

  var TreeNode13 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['number'] = elements[0];
  };
  inherit(TreeNode13, TreeNode);

  var TreeNode14 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['number'] = elements[0];
  };
  inherit(TreeNode14, TreeNode);

  var TreeNode15 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['base64_value'] = elements[0];
  };
  inherit(TreeNode15, TreeNode);

  var TreeNode16 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['base64_value'] = elements[0];
  };
  inherit(TreeNode16, TreeNode);

  var TreeNode17 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['integer'] = elements[1];
  };
  inherit(TreeNode17, TreeNode);

  var TreeNode18 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['integer'] = elements[1];
  };
  inherit(TreeNode18, TreeNode);

  var TreeNode19 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['integer'] = elements[0];
  };
  inherit(TreeNode19, TreeNode);

  var TreeNode20 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['hex_string'] = elements[0];
  };
  inherit(TreeNode20, TreeNode);

  var TreeNode21 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['bin_data_type'] = elements[0];
    this['base64_string'] = elements[1];
  };
  inherit(TreeNode21, TreeNode);

  var TreeNode22 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['integer_number'] = elements[1];
  };
  inherit(TreeNode22, TreeNode);

  var TreeNode23 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['number_long_value'] = elements[0];
  };
  inherit(TreeNode23, TreeNode);

  var TreeNode24 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['number_decimal_value'] = elements[0];
  };
  inherit(TreeNode24, TreeNode);

  var TreeNode25 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['date_value'] = elements[0];
  };
  inherit(TreeNode25, TreeNode);

  var TreeNode26 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['string'] = elements[1];
  };
  inherit(TreeNode26, TreeNode);

  var TreeNode27 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['comma'] = elements[0];
  };
  inherit(TreeNode27, TreeNode);

  var FAILURE = {};

  var Grammar = {
    _read_root: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._root = this._cache._root || {};
      var cached = this._cache._root[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        var index2 = this._offset;
        address2 = this._read_object();
        if (address2 === FAILURE) {
          this._offset = index2;
          address2 = this._read_array();
          if (address2 === FAILURE) {
            this._offset = index2;
          }
        }
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_root(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._root[index0] = [address0, this._offset];
      return address0;
    },

    _read_object: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._object = this._cache._object || {};
      var cached = this._cache._object[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_non_empty_object();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_empty_object();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._object[index0] = [address0, this._offset];
      return address0;
    },

    _read_pair: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._pair = this._cache._pair || {};
      var cached = this._cache._pair[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        var index2 = this._offset;
        address2 = this._read_string();
        if (address2 === FAILURE) {
          this._offset = index2;
          address2 = this._read_identifier();
          if (address2 === FAILURE) {
            this._offset = index2;
          }
        }
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_assignment();
          if (address3 !== FAILURE) {
            var address4 = FAILURE;
            address4 = this._read_value();
            if (address4 !== FAILURE) {
              elements0[1] = address4;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_pair(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._pair[index0] = [address0, this._offset];
      return address0;
    },

    _read_non_empty_object: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._non_empty_object = this._cache._non_empty_object || {};
      var cached = this._cache._non_empty_object[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_object_open();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_pair();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          var remaining0 = 0, index2 = this._offset, elements1 = [], address4 = true;
          while (address4 !== FAILURE) {
            var index3 = this._offset, elements2 = new Array(1);
            var address5 = FAILURE;
            address5 = this._read_delimiter();
            if (address5 !== FAILURE) {
              var address6 = FAILURE;
              address6 = this._read_pair();
              if (address6 !== FAILURE) {
                elements2[0] = address6;
              } else {
                elements2 = null;
                this._offset = index3;
              }
            } else {
              elements2 = null;
              this._offset = index3;
            }
            if (elements2 === null) {
              address4 = FAILURE;
            } else {
              address4 = new TreeNode3(this._input.substring(index3, this._offset), index3, elements2);
              this._offset = this._offset;
            }
            if (address4 !== FAILURE) {
              elements1.push(address4);
              --remaining0;
            }
          }
          if (remaining0 <= 0) {
            address3 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
            this._offset = this._offset;
          } else {
            address3 = FAILURE;
          }
          if (address3 !== FAILURE) {
            elements0[1] = address3;
            var address7 = FAILURE;
            address7 = this._read_object_close();
            if (address7 !== FAILURE) {
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_object(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._non_empty_object[index0] = [address0, this._offset];
      return address0;
    },

    _read_empty_object: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._empty_object = this._cache._empty_object || {};
      var cached = this._cache._empty_object[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      address1 = this._read_object_open();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_object_close();
        if (address2 !== FAILURE) {
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_empty_object(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._empty_object[index0] = [address0, this._offset];
      return address0;
    },

    _read_array: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._array = this._cache._array || {};
      var cached = this._cache._array[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_non_empty_array();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_empty_array();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._array[index0] = [address0, this._offset];
      return address0;
    },

    _read_non_empty_array: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._non_empty_array = this._cache._non_empty_array || {};
      var cached = this._cache._non_empty_array[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_array_open();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_value();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          var remaining0 = 0, index2 = this._offset, elements1 = [], address4 = true;
          while (address4 !== FAILURE) {
            var index3 = this._offset, elements2 = new Array(1);
            var address5 = FAILURE;
            address5 = this._read_delimiter();
            if (address5 !== FAILURE) {
              var address6 = FAILURE;
              address6 = this._read_value();
              if (address6 !== FAILURE) {
                elements2[0] = address6;
              } else {
                elements2 = null;
                this._offset = index3;
              }
            } else {
              elements2 = null;
              this._offset = index3;
            }
            if (elements2 === null) {
              address4 = FAILURE;
            } else {
              address4 = new TreeNode5(this._input.substring(index3, this._offset), index3, elements2);
              this._offset = this._offset;
            }
            if (address4 !== FAILURE) {
              elements1.push(address4);
              --remaining0;
            }
          }
          if (remaining0 <= 0) {
            address3 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
            this._offset = this._offset;
          } else {
            address3 = FAILURE;
          }
          if (address3 !== FAILURE) {
            elements0[1] = address3;
            var address7 = FAILURE;
            address7 = this._read_array_close();
            if (address7 !== FAILURE) {
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_array(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._non_empty_array[index0] = [address0, this._offset];
      return address0;
    },

    _read_empty_array: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._empty_array = this._cache._empty_array || {};
      var cached = this._cache._empty_array[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      address1 = this._read_array_open();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_array_close();
        if (address2 !== FAILURE) {
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_empty_array(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._empty_array[index0] = [address0, this._offset];
      return address0;
    },

    _read_value: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._value = this._cache._value || {};
      var cached = this._cache._value[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_json_values();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_mongo_literals();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_mongo_types();
          if (address0 === FAILURE) {
            this._offset = index1;
          }
        }
      }
      this._cache._value[index0] = [address0, this._offset];
      return address0;
    },

    _read_json_values: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._json_values = this._cache._json_values || {};
      var cached = this._cache._json_values[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_object();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_array();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_number();
          if (address0 === FAILURE) {
            this._offset = index1;
            address0 = this._read_string();
            if (address0 === FAILURE) {
              this._offset = index1;
              address0 = this._read_boolean();
              if (address0 === FAILURE) {
                this._offset = index1;
                address0 = this._read_null();
                if (address0 === FAILURE) {
                  this._offset = index1;
                }
              }
            }
          }
        }
      }
      this._cache._json_values[index0] = [address0, this._offset];
      return address0;
    },

    _read_mongo_literals: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._mongo_literals = this._cache._mongo_literals || {};
      var cached = this._cache._mongo_literals[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_min_key();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_max_key();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_undefined();
          if (address0 === FAILURE) {
            this._offset = index1;
            address0 = this._read_regexp_string();
            if (address0 === FAILURE) {
              this._offset = index1;
            }
          }
        }
      }
      this._cache._mongo_literals[index0] = [address0, this._offset];
      return address0;
    },

    _read_mongo_types: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._mongo_types = this._cache._mongo_types || {};
      var cached = this._cache._mongo_types[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_object_id();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_bin_data();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_timestamp();
          if (address0 === FAILURE) {
            this._offset = index1;
            address0 = this._read_number_long();
            if (address0 === FAILURE) {
              this._offset = index1;
              address0 = this._read_number_decimal();
              if (address0 === FAILURE) {
                this._offset = index1;
                address0 = this._read_date();
                if (address0 === FAILURE) {
                  this._offset = index1;
                  address0 = this._read_db_ref_type();
                  if (address0 === FAILURE) {
                    this._offset = index1;
                  }
                }
              }
            }
          }
        }
      }
      this._cache._mongo_types[index0] = [address0, this._offset];
      return address0;
    },

    _read_boolean: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._boolean = this._cache._boolean || {};
      var cached = this._cache._boolean[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_true();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_false();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._boolean[index0] = [address0, this._offset];
      return address0;
    },

    _read_true: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._true = this._cache._true || {};
      var cached = this._cache._true[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 4);
      }
      if (chunk0 === 'true') {
        address0 = this._actions.make_true(this._input, this._offset, this._offset + 4);
        this._offset = this._offset + 4;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"true"');
        }
      }
      this._cache._true[index0] = [address0, this._offset];
      return address0;
    },

    _read_false: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._false = this._cache._false || {};
      var cached = this._cache._false[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 5);
      }
      if (chunk0 === 'false') {
        address0 = this._actions.make_false(this._input, this._offset, this._offset + 5);
        this._offset = this._offset + 5;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"false"');
        }
      }
      this._cache._false[index0] = [address0, this._offset];
      return address0;
    },

    _read_null: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._null = this._cache._null || {};
      var cached = this._cache._null[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 4);
      }
      if (chunk0 === 'null') {
        address0 = this._actions.make_null(this._input, this._offset, this._offset + 4);
        this._offset = this._offset + 4;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"null"');
        }
      }
      this._cache._null[index0] = [address0, this._offset];
      return address0;
    },

    _read_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._string = this._cache._string || {};
      var cached = this._cache._string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_double_quote_string();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_single_quote_string();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._string[index0] = [address0, this._offset];
      return address0;
    },

    _read_identifier: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._identifier = this._cache._identifier || {};
      var cached = this._cache._identifier[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_identifier_start();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 1, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          address3 = this._read_identifier_part();
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_identifier(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._identifier[index0] = [address0, this._offset];
      return address0;
    },

    _read_identifier_start: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._identifier_start = this._cache._identifier_start || {};
      var cached = this._cache._identifier_start[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_unicode_letter();
      if (address0 === FAILURE) {
        this._offset = index1;
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk0 === '$') {
          address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address0 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"$"');
          }
        }
        if (address0 === FAILURE) {
          this._offset = index1;
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 === '_') {
            address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address0 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"_"');
            }
          }
          if (address0 === FAILURE) {
            this._offset = index1;
            var index2 = this._offset, elements0 = new Array(2);
            var address1 = FAILURE;
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 === '\\') {
              address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address1 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"\\\\"');
              }
            }
            if (address1 !== FAILURE) {
              elements0[0] = address1;
              var address2 = FAILURE;
              address2 = this._read_unicode_escape();
              if (address2 !== FAILURE) {
                elements0[1] = address2;
              } else {
                elements0 = null;
                this._offset = index2;
              }
            } else {
              elements0 = null;
              this._offset = index2;
            }
            if (elements0 === null) {
              address0 = FAILURE;
            } else {
              address0 = new TreeNode7(this._input.substring(index2, this._offset), index2, elements0);
              this._offset = this._offset;
            }
            if (address0 === FAILURE) {
              this._offset = index1;
            }
          }
        }
      }
      this._cache._identifier_start[index0] = [address0, this._offset];
      return address0;
    },

    _read_identifier_part: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._identifier_part = this._cache._identifier_part || {};
      var cached = this._cache._identifier_part[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_unicode_letter();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_unicode_digit();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_unicode_conn_punct();
          if (address0 === FAILURE) {
            this._offset = index1;
          }
        }
      }
      this._cache._identifier_part[index0] = [address0, this._offset];
      return address0;
    },

    _read_unicode_combining: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._unicode_combining = this._cache._unicode_combining || {};
      var cached = this._cache._unicode_combining[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_unicode_non_spacing();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_unicode_comb_spacing();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._unicode_combining[index0] = [address0, this._offset];
      return address0;
    },

    _read_unicode_escape: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._unicode_escape = this._cache._unicode_escape || {};
      var cached = this._cache._unicode_escape[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(5);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === 'u') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"u"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_hex_digit();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          address3 = this._read_hex_digit();
          if (address3 !== FAILURE) {
            elements0[2] = address3;
            var address4 = FAILURE;
            address4 = this._read_hex_digit();
            if (address4 !== FAILURE) {
              elements0[3] = address4;
              var address5 = FAILURE;
              address5 = this._read_hex_digit();
              if (address5 !== FAILURE) {
                elements0[4] = address5;
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode8(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._unicode_escape[index0] = [address0, this._offset];
      return address0;
    },

    _read_unicode_letter: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._unicode_letter = this._cache._unicode_letter || {};
      var cached = this._cache._unicode_letter[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]/.test(chunk0)) {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[a-zA-Z\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]');
        }
      }
      this._cache._unicode_letter[index0] = [address0, this._offset];
      return address0;
    },

    _read_unicode_digit: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._unicode_digit = this._cache._unicode_digit || {};
      var cached = this._cache._unicode_digit[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[0-9]/.test(chunk0)) {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[0-9]');
        }
      }
      this._cache._unicode_digit[index0] = [address0, this._offset];
      return address0;
    },

    _read_unicode_conn_punct: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._unicode_conn_punct = this._cache._unicode_conn_punct || {};
      var cached = this._cache._unicode_conn_punct[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F]/.test(chunk0)) {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[_\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]');
        }
      }
      this._cache._unicode_conn_punct[index0] = [address0, this._offset];
      return address0;
    },

    _read_double_quote_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._double_quote_string = this._cache._double_quote_string || {};
      var cached = this._cache._double_quote_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_double_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index3 = this._offset;
          var index4 = this._offset, elements2 = new Array(2);
          var address4 = FAILURE;
          var chunk0 = null;
          if (this._offset < this._inputSize) {
            chunk0 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk0 === '\\') {
            address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address4 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"\\\\"');
            }
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address5 = FAILURE;
            var chunk1 = null;
            if (this._offset < this._inputSize) {
              chunk1 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk1 !== null && /^[^\b\t\n\v\f\r]/.test(chunk1)) {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[^\\b\\t\\n\\v\\f\\r]');
              }
            }
            if (address5 !== FAILURE) {
              elements2[1] = address5;
            } else {
              elements2 = null;
              this._offset = index4;
            }
          } else {
            elements2 = null;
            this._offset = index4;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode(this._input.substring(index4, this._offset), index4, elements2);
            this._offset = this._offset;
          }
          if (address3 === FAILURE) {
            this._offset = index3;
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 !== null && /^[^"\b\t\n\v\f\r]/.test(chunk2)) {
              address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address3 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[^"\\b\\t\\n\\v\\f\\r]');
              }
            }
            if (address3 === FAILURE) {
              this._offset = index3;
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address6 = FAILURE;
          address6 = this._read_double_quote();
          if (address6 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._double_quote_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_single_quote_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._single_quote_string = this._cache._single_quote_string || {};
      var cached = this._cache._single_quote_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_single_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index3 = this._offset;
          var index4 = this._offset, elements2 = new Array(2);
          var address4 = FAILURE;
          var chunk0 = null;
          if (this._offset < this._inputSize) {
            chunk0 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk0 === '\\') {
            address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address4 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"\\\\"');
            }
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address5 = FAILURE;
            var chunk1 = null;
            if (this._offset < this._inputSize) {
              chunk1 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk1 !== null && /^[^\b\t\n\v\f\r]/.test(chunk1)) {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[^\\b\\t\\n\\v\\f\\r]');
              }
            }
            if (address5 !== FAILURE) {
              elements2[1] = address5;
            } else {
              elements2 = null;
              this._offset = index4;
            }
          } else {
            elements2 = null;
            this._offset = index4;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode(this._input.substring(index4, this._offset), index4, elements2);
            this._offset = this._offset;
          }
          if (address3 === FAILURE) {
            this._offset = index3;
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 !== null && /^[^'\b\t\n\v\f\r]/.test(chunk2)) {
              address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address3 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[^\'\\b\\t\\n\\v\\f\\r]');
              }
            }
            if (address3 === FAILURE) {
              this._offset = index3;
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address6 = FAILURE;
          address6 = this._read_single_quote();
          if (address6 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._single_quote_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_hex_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._hex_string = this._cache._hex_string || {};
      var cached = this._cache._hex_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_hex_single_quote();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_hex_double_quote();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._hex_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_hex_value: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._hex_value = this._cache._hex_value || {};
      var cached = this._cache._hex_value[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var remaining0 = 1, index1 = this._offset, elements0 = [], address1 = true;
      while (address1 !== FAILURE) {
        address1 = this._read_hex_digit();
        if (address1 !== FAILURE) {
          elements0.push(address1);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      } else {
        address0 = FAILURE;
      }
      this._cache._hex_value[index0] = [address0, this._offset];
      return address0;
    },

    _read_hex_single_quote: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._hex_single_quote = this._cache._hex_single_quote || {};
      var cached = this._cache._hex_single_quote[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_single_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_hex_value();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_single_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._hex_single_quote[index0] = [address0, this._offset];
      return address0;
    },

    _read_hex_double_quote: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._hex_double_quote = this._cache._hex_double_quote || {};
      var cached = this._cache._hex_double_quote[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_double_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_hex_value();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_double_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._hex_double_quote[index0] = [address0, this._offset];
      return address0;
    },

    _read_integer_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._integer_string = this._cache._integer_string || {};
      var cached = this._cache._integer_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_integer_string_single();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_integer_string_double();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._integer_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_integer_string_single: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._integer_string_single = this._cache._integer_string_single || {};
      var cached = this._cache._integer_string_single[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_single_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_integer_number();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_single_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_numeric_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._integer_string_single[index0] = [address0, this._offset];
      return address0;
    },

    _read_integer_string_double: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._integer_string_double = this._cache._integer_string_double || {};
      var cached = this._cache._integer_string_double[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_double_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_integer_number();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_double_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_numeric_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._integer_string_double[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_string = this._cache._number_string || {};
      var cached = this._cache._number_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_number_string_single();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_number_string_double();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._number_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_string_single: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_string_single = this._cache._number_string_single || {};
      var cached = this._cache._number_string_single[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_single_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_number();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_single_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_numeric_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._number_string_single[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_string_double: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_string_double = this._cache._number_string_double || {};
      var cached = this._cache._number_string_double[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_double_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_number();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_double_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_numeric_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._number_string_double[index0] = [address0, this._offset];
      return address0;
    },

    _read_regexp_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._regexp_string = this._cache._regexp_string || {};
      var cached = this._cache._regexp_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_slash();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index3 = this._offset;
          var index4 = this._offset, elements2 = new Array(2);
          var address4 = FAILURE;
          var chunk0 = null;
          if (this._offset < this._inputSize) {
            chunk0 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk0 === '\\') {
            address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address4 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"\\\\"');
            }
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address5 = FAILURE;
            if (this._offset < this._inputSize) {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('<any char>');
              }
            }
            if (address5 !== FAILURE) {
              elements2[1] = address5;
            } else {
              elements2 = null;
              this._offset = index4;
            }
          } else {
            elements2 = null;
            this._offset = index4;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode(this._input.substring(index4, this._offset), index4, elements2);
            this._offset = this._offset;
          }
          if (address3 === FAILURE) {
            this._offset = index3;
            var chunk1 = null;
            if (this._offset < this._inputSize) {
              chunk1 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk1 !== null && /^[^\/]/.test(chunk1)) {
              address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address3 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[^\\/]');
              }
            }
            if (address3 === FAILURE) {
              this._offset = index3;
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address6 = FAILURE;
          address6 = this._read_slash();
          if (address6 !== FAILURE) {
            var address7 = FAILURE;
            var index5 = this._offset;
            address7 = this._read_regexp_options();
            if (address7 === FAILURE) {
              address7 = new TreeNode(this._input.substring(index5, index5), index5);
              this._offset = index5;
            }
            if (address7 !== FAILURE) {
              elements0[1] = address7;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_regexp(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._regexp_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_regexp_options: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._regexp_options = this._cache._regexp_options || {};
      var cached = this._cache._regexp_options[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var remaining0 = 1, index1 = this._offset, elements0 = [], address1 = true;
      while (address1 !== FAILURE) {
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk0 !== null && /^[gims]/.test(chunk0)) {
          address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address1 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('[gims]');
          }
        }
        if (address1 !== FAILURE) {
          elements0.push(address1);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      } else {
        address0 = FAILURE;
      }
      this._cache._regexp_options[index0] = [address0, this._offset];
      return address0;
    },

    _read_base64_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._base64_string = this._cache._base64_string || {};
      var cached = this._cache._base64_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_base64_single_quote();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_base64_dobule_quote();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._base64_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_base64_value: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._base64_value = this._cache._base64_value || {};
      var cached = this._cache._base64_value[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var remaining0 = 1, index2 = this._offset, elements1 = [], address2 = true;
      while (address2 !== FAILURE) {
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk0 !== null && /^[a-zA-Z0-9+\/]/.test(chunk0)) {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('[a-zA-Z0-9+\\/]');
          }
        }
        if (address2 !== FAILURE) {
          elements1.push(address2);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
        this._offset = this._offset;
      } else {
        address1 = FAILURE;
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address3 = FAILURE;
        var index3 = this._offset;
        var index4 = this._offset;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk1 === '=') {
          address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address3 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"="');
          }
        }
        if (address3 === FAILURE) {
          this._offset = index4;
          var chunk2 = null;
          if (this._offset < this._inputSize) {
            chunk2 = this._input.substring(this._offset, this._offset + 2);
          }
          if (chunk2 === '==') {
            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 2), this._offset);
            this._offset = this._offset + 2;
          } else {
            address3 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"=="');
            }
          }
          if (address3 === FAILURE) {
            this._offset = index4;
          }
        }
        if (address3 === FAILURE) {
          address3 = new TreeNode(this._input.substring(index3, index3), index3);
          this._offset = index3;
        }
        if (address3 !== FAILURE) {
          elements0[1] = address3;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._base64_value[index0] = [address0, this._offset];
      return address0;
    },

    _read_base64_single_quote: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._base64_single_quote = this._cache._base64_single_quote || {};
      var cached = this._cache._base64_single_quote[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_single_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_base64_value();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_single_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._base64_single_quote[index0] = [address0, this._offset];
      return address0;
    },

    _read_base64_dobule_quote: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._base64_dobule_quote = this._cache._base64_dobule_quote || {};
      var cached = this._cache._base64_dobule_quote[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_double_quote();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_base64_value();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read_double_quote();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._base64_dobule_quote[index0] = [address0, this._offset];
      return address0;
    },

    _read_number: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number = this._cache._number || {};
      var cached = this._cache._number[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(4);
      var address1 = FAILURE;
      var index2 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '-') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"-"');
        }
      }
      if (address1 === FAILURE) {
        address1 = new TreeNode(this._input.substring(index2, index2), index2);
        this._offset = index2;
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_integer();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var index3 = this._offset;
          address3 = this._read_fraction();
          if (address3 === FAILURE) {
            address3 = new TreeNode(this._input.substring(index3, index3), index3);
            this._offset = index3;
          }
          if (address3 !== FAILURE) {
            elements0[2] = address3;
            var address4 = FAILURE;
            var index4 = this._offset;
            address4 = this._read_exponent();
            if (address4 === FAILURE) {
              address4 = new TreeNode(this._input.substring(index4, index4), index4);
              this._offset = index4;
            }
            if (address4 !== FAILURE) {
              elements0[3] = address4;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_number(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._number[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_as_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_as_string = this._cache._number_as_string || {};
      var cached = this._cache._number_as_string[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(4);
      var address1 = FAILURE;
      var index2 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '-') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"-"');
        }
      }
      if (address1 === FAILURE) {
        address1 = new TreeNode(this._input.substring(index2, index2), index2);
        this._offset = index2;
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_integer();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var index3 = this._offset;
          address3 = this._read_fraction();
          if (address3 === FAILURE) {
            address3 = new TreeNode(this._input.substring(index3, index3), index3);
            this._offset = index3;
          }
          if (address3 !== FAILURE) {
            elements0[2] = address3;
            var address4 = FAILURE;
            var index4 = this._offset;
            address4 = this._read_exponent();
            if (address4 === FAILURE) {
              address4 = new TreeNode(this._input.substring(index4, index4), index4);
              this._offset = index4;
            }
            if (address4 !== FAILURE) {
              elements0[3] = address4;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_number_as_string(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._number_as_string[index0] = [address0, this._offset];
      return address0;
    },

    _read_integer: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._integer = this._cache._integer || {};
      var cached = this._cache._integer[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '0') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"0"');
        }
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        var index2 = this._offset, elements0 = new Array(2);
        var address1 = FAILURE;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk1 !== null && /^[1-9]/.test(chunk1)) {
          address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address1 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('[1-9]');
          }
        }
        if (address1 !== FAILURE) {
          elements0[0] = address1;
          var address2 = FAILURE;
          var remaining0 = 0, index3 = this._offset, elements1 = [], address3 = true;
          while (address3 !== FAILURE) {
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 !== null && /^[0-9]/.test(chunk2)) {
              address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address3 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[0-9]');
              }
            }
            if (address3 !== FAILURE) {
              elements1.push(address3);
              --remaining0;
            }
          }
          if (remaining0 <= 0) {
            address2 = new TreeNode(this._input.substring(index3, this._offset), index3, elements1);
            this._offset = this._offset;
          } else {
            address2 = FAILURE;
          }
          if (address2 !== FAILURE) {
            elements0[1] = address2;
          } else {
            elements0 = null;
            this._offset = index2;
          }
        } else {
          elements0 = null;
          this._offset = index2;
        }
        if (elements0 === null) {
          address0 = FAILURE;
        } else {
          address0 = new TreeNode(this._input.substring(index2, this._offset), index2, elements0);
          this._offset = this._offset;
        }
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._integer[index0] = [address0, this._offset];
      return address0;
    },

    _read_fraction: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._fraction = this._cache._fraction || {};
      var cached = this._cache._fraction[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '.') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"."');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 1, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 !== null && /^[0-9]/.test(chunk1)) {
            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address3 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('[0-9]');
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._fraction[index0] = [address0, this._offset];
      return address0;
    },

    _read_exponent: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._exponent = this._cache._exponent || {};
      var cached = this._cache._exponent[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      var index2 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === 'e') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"e"');
        }
      }
      if (address1 === FAILURE) {
        this._offset = index2;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk1 === 'E') {
          address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address1 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"E"');
          }
        }
        if (address1 === FAILURE) {
          this._offset = index2;
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index3 = this._offset;
        var chunk2 = null;
        if (this._offset < this._inputSize) {
          chunk2 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk2 === '+') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"+"');
          }
        }
        if (address2 === FAILURE) {
          this._offset = index3;
          var chunk3 = null;
          if (this._offset < this._inputSize) {
            chunk3 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk3 === '-') {
            address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address2 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"-"');
            }
          }
          if (address2 === FAILURE) {
            this._offset = index3;
            var chunk4 = null;
            if (this._offset < this._inputSize) {
              chunk4 = this._input.substring(this._offset, this._offset + 0);
            }
            if (chunk4 === '') {
              address2 = new TreeNode(this._input.substring(this._offset, this._offset + 0), this._offset);
              this._offset = this._offset + 0;
            } else {
              address2 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('""');
              }
            }
            if (address2 === FAILURE) {
              this._offset = index3;
            }
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var remaining0 = 1, index4 = this._offset, elements1 = [], address4 = true;
          while (address4 !== FAILURE) {
            var chunk5 = null;
            if (this._offset < this._inputSize) {
              chunk5 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk5 !== null && /^[0-9]/.test(chunk5)) {
              address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address4 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[0-9]');
              }
            }
            if (address4 !== FAILURE) {
              elements1.push(address4);
              --remaining0;
            }
          }
          if (remaining0 <= 0) {
            address3 = new TreeNode(this._input.substring(index4, this._offset), index4, elements1);
            this._offset = this._offset;
          } else {
            address3 = FAILURE;
          }
          if (address3 !== FAILURE) {
            elements0[2] = address3;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._exponent[index0] = [address0, this._offset];
      return address0;
    },

    _read_integer_number: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._integer_number = this._cache._integer_number || {};
      var cached = this._cache._integer_number[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_integer();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 0);
        }
        if (chunk0 === '') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 0), this._offset);
          this._offset = this._offset + 0;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('""');
          }
        }
        if (address2 !== FAILURE) {
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_number(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._integer_number[index0] = [address0, this._offset];
      return address0;
    },

    _read_min_key: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._min_key = this._cache._min_key || {};
      var cached = this._cache._min_key[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 6);
      }
      if (chunk0 === 'MinKey') {
        address0 = this._actions.make_min_key(this._input, this._offset, this._offset + 6);
        this._offset = this._offset + 6;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"MinKey"');
        }
      }
      this._cache._min_key[index0] = [address0, this._offset];
      return address0;
    },

    _read_max_key: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._max_key = this._cache._max_key || {};
      var cached = this._cache._max_key[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 6);
      }
      if (chunk0 === 'MaxKey') {
        address0 = this._actions.make_max_key(this._input, this._offset, this._offset + 6);
        this._offset = this._offset + 6;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"MaxKey"');
        }
      }
      this._cache._max_key[index0] = [address0, this._offset];
      return address0;
    },

    _read_undefined: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._undefined = this._cache._undefined || {};
      var cached = this._cache._undefined[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 9);
      }
      if (chunk0 === 'undefined') {
        address0 = this._actions.make_undefined(this._input, this._offset, this._offset + 9);
        this._offset = this._offset + 9;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"undefined"');
        }
      }
      this._cache._undefined[index0] = [address0, this._offset];
      return address0;
    },

    _read_object_id: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._object_id = this._cache._object_id || {};
      var cached = this._cache._object_id[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 8);
      }
      if (chunk0 === 'ObjectId') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 8), this._offset);
        this._offset = this._offset + 8;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"ObjectId"');
        }
      }
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_type_open();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read_hex_string();
          if (address3 !== FAILURE) {
            elements0[0] = address3;
            var address4 = FAILURE;
            address4 = this._read_type_close();
            if (address4 !== FAILURE) {
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_object_id(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._object_id[index0] = [address0, this._offset];
      return address0;
    },

    _read_bin_data_type: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._bin_data_type = this._cache._bin_data_type || {};
      var cached = this._cache._bin_data_type[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_string();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_integer_number();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._bin_data_type[index0] = [address0, this._offset];
      return address0;
    },

    _read_bin_data: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._bin_data = this._cache._bin_data || {};
      var cached = this._cache._bin_data[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 7);
      }
      if (chunk0 === 'BinData') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 7), this._offset);
        this._offset = this._offset + 7;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"BinData"');
        }
      }
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_type_open();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read_bin_data_type();
          if (address3 !== FAILURE) {
            elements0[0] = address3;
            var address4 = FAILURE;
            address4 = this._read_delimiter();
            if (address4 !== FAILURE) {
              var address5 = FAILURE;
              address5 = this._read_base64_string();
              if (address5 !== FAILURE) {
                elements0[1] = address5;
                var address6 = FAILURE;
                address6 = this._read_type_close();
                if (address6 !== FAILURE) {
                } else {
                  elements0 = null;
                  this._offset = index1;
                }
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_bin_data(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._bin_data[index0] = [address0, this._offset];
      return address0;
    },

    _read_timestamp: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._timestamp = this._cache._timestamp || {};
      var cached = this._cache._timestamp[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 9);
      }
      if (chunk0 === 'Timestamp') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 9), this._offset);
        this._offset = this._offset + 9;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"Timestamp"');
        }
      }
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_type_open();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read_integer_number();
          if (address3 !== FAILURE) {
            elements0[0] = address3;
            var address4 = FAILURE;
            address4 = this._read_delimiter();
            if (address4 !== FAILURE) {
              var address5 = FAILURE;
              address5 = this._read_integer_number();
              if (address5 !== FAILURE) {
                elements0[1] = address5;
                var address6 = FAILURE;
                address6 = this._read_type_close();
                if (address6 !== FAILURE) {
                } else {
                  elements0 = null;
                  this._offset = index1;
                }
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_timestamp(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._timestamp[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_long_value: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_long_value = this._cache._number_long_value || {};
      var cached = this._cache._number_long_value[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_integer_number();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_integer_string();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._number_long_value[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_long: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_long = this._cache._number_long || {};
      var cached = this._cache._number_long[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 10);
      }
      if (chunk0 === 'NumberLong') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 10), this._offset);
        this._offset = this._offset + 10;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"NumberLong"');
        }
      }
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_type_open();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read_number_long_value();
          if (address3 !== FAILURE) {
            elements0[0] = address3;
            var address4 = FAILURE;
            address4 = this._read_type_close();
            if (address4 !== FAILURE) {
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_number_long(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._number_long[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_decimal_value: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_decimal_value = this._cache._number_decimal_value || {};
      var cached = this._cache._number_decimal_value[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_number_as_string();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_number_string();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._number_decimal_value[index0] = [address0, this._offset];
      return address0;
    },

    _read_number_decimal: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number_decimal = this._cache._number_decimal || {};
      var cached = this._cache._number_decimal[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 13);
      }
      if (chunk0 === 'NumberDecimal') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 13), this._offset);
        this._offset = this._offset + 13;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"NumberDecimal"');
        }
      }
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_type_open();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read_number_decimal_value();
          if (address3 !== FAILURE) {
            elements0[0] = address3;
            var address4 = FAILURE;
            address4 = this._read_type_close();
            if (address4 !== FAILURE) {
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_number_decimal(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._number_decimal[index0] = [address0, this._offset];
      return address0;
    },

    _read_date_type: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._date_type = this._cache._date_type || {};
      var cached = this._cache._date_type[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var index2 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 3);
      }
      if (chunk0 === 'new') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 3), this._offset);
        this._offset = this._offset + 3;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"new"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 1, index3 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          address3 = this._read_space();
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index3, this._offset), index3, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address4 = FAILURE;
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 4);
          }
          if (chunk1 === 'Date') {
            address4 = new TreeNode(this._input.substring(this._offset, this._offset + 4), this._offset);
            this._offset = this._offset + 4;
          } else {
            address4 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"Date"');
            }
          }
          if (address4 !== FAILURE) {
            elements0[2] = address4;
          } else {
            elements0 = null;
            this._offset = index2;
          }
        } else {
          elements0 = null;
          this._offset = index2;
        }
      } else {
        elements0 = null;
        this._offset = index2;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index2, this._offset), index2, elements0);
        this._offset = this._offset;
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        var chunk2 = null;
        if (this._offset < this._inputSize) {
          chunk2 = this._input.substring(this._offset, this._offset + 7);
        }
        if (chunk2 === 'ISODate') {
          address0 = new TreeNode(this._input.substring(this._offset, this._offset + 7), this._offset);
          this._offset = this._offset + 7;
        } else {
          address0 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"ISODate"');
          }
        }
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._date_type[index0] = [address0, this._offset];
      return address0;
    },

    _read_date_value: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._date_value = this._cache._date_value || {};
      var cached = this._cache._date_value[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_integer_number();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_string();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._date_value[index0] = [address0, this._offset];
      return address0;
    },

    _read_date: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._date = this._cache._date || {};
      var cached = this._cache._date[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read_date_type();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_type_open();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read_date_value();
          if (address3 !== FAILURE) {
            elements0[0] = address3;
            var address4 = FAILURE;
            address4 = this._read_type_close();
            if (address4 !== FAILURE) {
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_date(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._date[index0] = [address0, this._offset];
      return address0;
    },

    _read_db_ref_type: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._db_ref_type = this._cache._db_ref_type || {};
      var cached = this._cache._db_ref_type[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 5);
      }
      if (chunk0 === 'DBRef') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 5), this._offset);
        this._offset = this._offset + 5;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"DBRef"');
        }
      }
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_type_open();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read_string();
          if (address3 !== FAILURE) {
            elements0[0] = address3;
            var address4 = FAILURE;
            address4 = this._read_delimiter();
            if (address4 !== FAILURE) {
              var address5 = FAILURE;
              address5 = this._read_string();
              if (address5 !== FAILURE) {
                elements0[1] = address5;
                var address6 = FAILURE;
                address6 = this._read_type_close();
                if (address6 !== FAILURE) {
                } else {
                  elements0 = null;
                  this._offset = index1;
                }
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = this._actions.make_db_ref(this._input, index1, this._offset, elements0);
        this._offset = this._offset;
      }
      this._cache._db_ref_type[index0] = [address0, this._offset];
      return address0;
    },

    _read_single_quote: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._single_quote = this._cache._single_quote || {};
      var cached = this._cache._single_quote[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '\'') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"\'"');
        }
      }
      this._cache._single_quote[index0] = [address0, this._offset];
      return address0;
    },

    _read_double_quote: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._double_quote = this._cache._double_quote || {};
      var cached = this._cache._double_quote[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '"') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\'"\'');
        }
      }
      this._cache._double_quote[index0] = [address0, this._offset];
      return address0;
    },

    _read_left_paren: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._left_paren = this._cache._left_paren || {};
      var cached = this._cache._left_paren[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '(') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\'(\'');
        }
      }
      this._cache._left_paren[index0] = [address0, this._offset];
      return address0;
    },

    _read_right_paren: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._right_paren = this._cache._right_paren || {};
      var cached = this._cache._right_paren[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === ')') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\')\'');
        }
      }
      this._cache._right_paren[index0] = [address0, this._offset];
      return address0;
    },

    _read_left_brace: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._left_brace = this._cache._left_brace || {};
      var cached = this._cache._left_brace[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '{') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\'{\'');
        }
      }
      this._cache._left_brace[index0] = [address0, this._offset];
      return address0;
    },

    _read_right_brace: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._right_brace = this._cache._right_brace || {};
      var cached = this._cache._right_brace[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '}') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\'}\'');
        }
      }
      this._cache._right_brace[index0] = [address0, this._offset];
      return address0;
    },

    _read_left_bracket: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._left_bracket = this._cache._left_bracket || {};
      var cached = this._cache._left_bracket[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '[') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\'[\'');
        }
      }
      this._cache._left_bracket[index0] = [address0, this._offset];
      return address0;
    },

    _read_right_bracket: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._right_bracket = this._cache._right_bracket || {};
      var cached = this._cache._right_bracket[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === ']') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\']\'');
        }
      }
      this._cache._right_bracket[index0] = [address0, this._offset];
      return address0;
    },

    _read_comma: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._comma = this._cache._comma || {};
      var cached = this._cache._comma[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === ',') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\',\'');
        }
      }
      this._cache._comma[index0] = [address0, this._offset];
      return address0;
    },

    _read_colon: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._colon = this._cache._colon || {};
      var cached = this._cache._colon[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === ':') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\':\'');
        }
      }
      this._cache._colon[index0] = [address0, this._offset];
      return address0;
    },

    _read_slash: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._slash = this._cache._slash || {};
      var cached = this._cache._slash[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '/') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\'/\'');
        }
      }
      this._cache._slash[index0] = [address0, this._offset];
      return address0;
    },

    _read_space: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._space = this._cache._space || {};
      var cached = this._cache._space[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[\s]/.test(chunk0)) {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[\\s]');
        }
      }
      this._cache._space[index0] = [address0, this._offset];
      return address0;
    },

    _read_new_line: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._new_line = this._cache._new_line || {};
      var cached = this._cache._new_line[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[\n]/.test(chunk0)) {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[\\n]');
        }
      }
      this._cache._new_line[index0] = [address0, this._offset];
      return address0;
    },

    _read_hex_digit: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._hex_digit = this._cache._hex_digit || {};
      var cached = this._cache._hex_digit[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[a-fA-F0-9]/.test(chunk0)) {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[a-fA-F0-9]');
        }
      }
      this._cache._hex_digit[index0] = [address0, this._offset];
      return address0;
    },

    _read_comment: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._comment = this._cache._comment || {};
      var cached = this._cache._comment[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 2);
      }
      if (chunk0 === '//') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 2), this._offset);
        this._offset = this._offset + 2;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"//"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 !== null && /^[^\n]/.test(chunk1)) {
            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address3 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('[^\\n]');
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._comment[index0] = [address0, this._offset];
      return address0;
    },

    _read___: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache.___ = this._cache.___ || {};
      var cached = this._cache.___[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var remaining0 = 0, index1 = this._offset, elements0 = [], address1 = true;
      while (address1 !== FAILURE) {
        var index2 = this._offset;
        address1 = this._read_space();
        if (address1 === FAILURE) {
          this._offset = index2;
          address1 = this._read_new_line();
          if (address1 === FAILURE) {
            this._offset = index2;
            address1 = this._read_comment();
            if (address1 === FAILURE) {
              this._offset = index2;
            }
          }
        }
        if (address1 !== FAILURE) {
          elements0.push(address1);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      } else {
        address0 = FAILURE;
      }
      this._cache.___[index0] = [address0, this._offset];
      return address0;
    },

    _read_delimiter: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._delimiter = this._cache._delimiter || {};
      var cached = this._cache._delimiter[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(1);
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_comma();
        if (address2 !== FAILURE) {
          elements0[0] = address2;
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode27(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._delimiter[index0] = [address0, this._offset];
      return address0;
    },

    _read_assignment: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._assignment = this._cache._assignment || {};
      var cached = this._cache._assignment[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_colon();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._assignment[index0] = [address0, this._offset];
      return address0;
    },

    _read_object_open: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._object_open = this._cache._object_open || {};
      var cached = this._cache._object_open[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_left_brace();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._object_open[index0] = [address0, this._offset];
      return address0;
    },

    _read_object_close: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._object_close = this._cache._object_close || {};
      var cached = this._cache._object_close[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_right_brace();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._object_close[index0] = [address0, this._offset];
      return address0;
    },

    _read_array_open: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._array_open = this._cache._array_open || {};
      var cached = this._cache._array_open[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_left_bracket();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._array_open[index0] = [address0, this._offset];
      return address0;
    },

    _read_array_close: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._array_close = this._cache._array_close || {};
      var cached = this._cache._array_close[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        var address2 = FAILURE;
        address2 = this._read_right_bracket();
        if (address2 !== FAILURE) {
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._array_close[index0] = [address0, this._offset];
      return address0;
    },

    _read_type_open: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._type_open = this._cache._type_open || {};
      var cached = this._cache._type_open[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      var remaining0 = 0, index2 = this._offset, elements1 = [], address2 = true;
      while (address2 !== FAILURE) {
        address2 = this._read_space();
        if (address2 !== FAILURE) {
          elements1.push(address2);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
        this._offset = this._offset;
      } else {
        address1 = FAILURE;
      }
      if (address1 !== FAILURE) {
        var address3 = FAILURE;
        address3 = this._read_left_paren();
        if (address3 !== FAILURE) {
          var address4 = FAILURE;
          var remaining1 = 0, index3 = this._offset, elements2 = [], address5 = true;
          while (address5 !== FAILURE) {
            address5 = this._read_space();
            if (address5 !== FAILURE) {
              elements2.push(address5);
              --remaining1;
            }
          }
          if (remaining1 <= 0) {
            address4 = new TreeNode(this._input.substring(index3, this._offset), index3, elements2);
            this._offset = this._offset;
          } else {
            address4 = FAILURE;
          }
          if (address4 !== FAILURE) {
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._type_open[index0] = [address0, this._offset];
      return address0;
    },

    _read_type_close: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._type_close = this._cache._type_close || {};
      var cached = this._cache._type_close[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = [];
      var address1 = FAILURE;
      var remaining0 = 0, index2 = this._offset, elements1 = [], address2 = true;
      while (address2 !== FAILURE) {
        address2 = this._read_space();
        if (address2 !== FAILURE) {
          elements1.push(address2);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
        this._offset = this._offset;
      } else {
        address1 = FAILURE;
      }
      if (address1 !== FAILURE) {
        var address3 = FAILURE;
        address3 = this._read_right_paren();
        if (address3 !== FAILURE) {
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._type_close[index0] = [address0, this._offset];
      return address0;
    }
  };

  var Parser = function(input, actions, types) {
    this._input = input;
    this._inputSize = input.length;
    this._actions = actions;
    this._types = types;
    this._offset = 0;
    this._cache = {};
    this._failure = 0;
    this._expected = [];
  };

  Parser.prototype.parse = function() {
    var tree = this._read_root();
    if (tree !== FAILURE && this._offset === this._inputSize) {
      return tree;
    }
    if (this._expected.length === 0) {
      this._failure = this._offset;
      this._expected.push('<EOF>');
    }
    this.constructor.lastError = {offset: this._offset, expected: this._expected};
    throw new SyntaxError(formatError(this._input, this._failure, this._expected));
  };

  var parse = function(input, options) {
    options = options || {};
    var parser = new Parser(input, options.actions, options.types);
    return parser.parse();
  };
  extend(Parser.prototype, Grammar);

  var exported = {Grammar: Grammar, Parser: Parser, parse: parse};

  if (typeof require === 'function' && typeof exports === 'object') {
    extend(exports, exported);
  } else {
    var namespace = typeof this !== 'undefined' ? this : window;
    namespace.ExtendedJSON = exported;
  }
})();
