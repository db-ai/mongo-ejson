# mongo-ejson

[![Build Status](https://travis-ci.org/db-ai/mongo-ejson.svg?branch=master)](https://travis-ci.org/db-ai/mongo-ejson) [![Gem Version](https://badge.fury.io/rb/mongo-ejson.svg)](https://badge.fury.io/rb/mongo-ejson)

This is a parser for mongo "flavoured" JSON, that supports mongo specific literals like `ISODate` or `ObjectId`, as well as some other nasty non-json things.

It can instantiate corresponding BSON objects or produce Extended JSON objects.

## Usage

Add gem to your Gemfile:

    gem 'mongo-ejson'

Require when needed:

    require 'ejson'

You can parse files in two modes: `Wrap` and `BSON`.

In `Wrap` mode, parser will instantiate Struct classes. It's useful when you
only need to validate provided EJSON code.

    EJSON.parse_wrap(%q|{ "_id": ObjectId('5c520a538628ea8c13261c64') }|)
    => {"_id"=>#<struct Struct::ObjectId hex="5c520a538628ea8c13261c64">}

To use `BSON` mode you need to install `bson` gem. In this case parser will
instantiate real BSON objects.

    require 'bson'
    EJSON.parse_bson(%q|{ "_id": ObjectId('5c520a538628ea8c13261c64') }|)
    => {"_id"=>BSON::ObjectId('5c520a538628ea8c13261c64')}

You can also use JavaScript parser in your Rails application. At the moment it
does not build JavaScript object and returns raw parse tree. It is useful only
for validating the syntax.

Just add it to your `application.js`

    //= require 'ejson'

## Requirements

Runtime:
  * Ruby 2.5+
  * JRuby 9.2+

Development:
  * [canopy](https://github.com/jcoglan/canopy) from master branch

## Supported literals

* `undefined`
* `MinKey`
* `MaxKey`
* `ObjectId(<object_id_hex_string>)`
* `BinData(<type_string>, <bindata_base64_string>)`
* `BinData(<type_integer>, <base64_bindata>)`
* `Timestamp(<time_interger>, <increment_integer>)`
* `NumberLong(<value_string>)`
* `NumberLong(<value_integer>)`
* `NumberDecimal(<value_string>)`
* `NumberDecimal(<value_number>)`
* `ISODate(<time_iso8601_string>)`
* `ISODate(<time_interger>)`
* `new Date(<time_iso8601_string>)`
* `new Date(<time_interger>)`
* `/<regexp>/<options>`
* `DBRef(<name_string>, <object_id_hex_string>)`

## Supported JSON extensions:

* Single quoted strings
* Single line comments `//`

## Planned JSON extensions:

* Non-quoted key names: `{_id: 123}`
* Multi-line comments: `/* */`

## Issues

* String: following not escaped chars should fail, but pass

    * Backspace (must be replaced with `\b`). no fixture
    * Form feed (must be replaced with `\f`), no fixture
    * Newline (must be replaced with `\n`)
    * Carriage return (must be replaced with `\r`), no fixture
    * Tab (must be replaced with `\t`)


