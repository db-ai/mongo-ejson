# mongo-ejson

[![Build Status](https://travis-ci.org/db-ai/mongo-ejson.svg?branch=master)](https://travis-ci.org/db-ai/mongo-ejson)

This is a parser for mongo "flavoured" JSON, that supports mongo specific literals like `ISODate` or `ObjectId`, as well as some other nasty non-json things.

It can instantiate corresponding BSON objects or produce Extended JSON objects.

Supported literals:

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

Supported JSON extensions:

* Single quoted strings
* Single line comments `//`

Planned JSON extensions:

* Multi-line comments: `/* */`
