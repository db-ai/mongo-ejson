module Wrap
  MinKey = Class.new
  MaxKey = Class.new
  Undefined = Class.new

  ObjectId = Struct.new("ObjectId", :hex)
  BinData = Struct.new("BinData", :type, :data)
  Timestamp = Struct.new("Timestamp", :timestamp, :fraction)
  NumberDecimal = Struct.new("NumberDecimal", :value)
  RegExp = Struct.new("RegExp", :expression, :options)

  DBRef = Struct.new("DBRef", :name, :id)
end
