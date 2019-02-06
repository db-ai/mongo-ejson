require 'bson'

RSpec.describe EJSON do
  EXPECTED_MONGO_WRAP = [
    Wrap::ObjectId.new('5c520a538628ea8c13261c61'),
    Wrap::ObjectId.new('5c520a538628ea8c13261c62'),
    Wrap::ObjectId.new('5c520a538628ea8c13261c63'),
    Wrap::ObjectId.new('5c520a538628ea8c13261c64'),
    Wrap::ObjectId.new('5c520a538628ea8c13261c65'),

    Wrap::BinData.new(4, "adaEs+/="),
    Wrap::BinData.new("generic", "adaEs+/="),

    Wrap::Timestamp.new(58305, 58),

    9223372036854775808,
    9223372036854775801,

    BigDecimal("42"),
    BigDecimal("-42.0000000001"),
    BigDecimal("4201e-45"),

    Time.at(48305),
    DateTime.parse("2448-02-12T19:59:44.455Z"),

    Time.at(557433333),
    DateTime.parse("1448-12-30T01:01:01.001Z"),

    Regexp.new('foo\/"bar"', 'i'),
    Regexp.new("'bazillo'+483111", 'i'),

    Wrap::DBRef.new("plans", "5c5483d28628ea4f77010bc3")
  ]

  it "parses wrapped types" do
    fixture = File.join(File.dirname(__FILE__), 'fixtures/pass/mongo_smoke.json')
    content = File.read(fixture)

    result = EJSON.parse_wrap(content)

    expect(result).to eq(EXPECTED_MONGO_WRAP)
  end

  EXPECTED_MONGO_BSON = [
    BSON::ObjectId.from_string('5c520a538628ea8c13261c61'),
    BSON::ObjectId.from_string('5c520a538628ea8c13261c62'),
    BSON::ObjectId.from_string('5c520a538628ea8c13261c63'),
    BSON::ObjectId.from_string('5c520a538628ea8c13261c64'),
    BSON::ObjectId.from_string('5c520a538628ea8c13261c65'),

    BSON::Binary.new("adaEs+/=", :uuid),
    BSON::Binary.new("adaEs+/=", :generic),

    BSON::Timestamp.new(58305, 58),

    9223372036854775808,
    9223372036854775801,

    BSON::Decimal128.new("42"),
    BSON::Decimal128.new("-42.0000000001"),
    BSON::Decimal128.new("4201e-45"),

    Time.at(48305),
    DateTime.parse("2448-02-12T19:59:44.455Z"),

    Time.at(557433333),
    DateTime.parse("1448-12-30T01:01:01.001Z"),

    Regexp.new('foo\/"bar"', 'i'),
    Regexp.new("'bazillo'+483111", 'i'),

    {:$id=>"5c5483d28628ea4f77010bc3", :$ref=>"plans"}
  ]

  it "parses mongo types" do
    fixture = File.join(File.dirname(__FILE__), 'fixtures/pass/mongo_smoke.json')
    content = File.read(fixture)

    result = EJSON.parse_bson(content)

    expect(result).to eq(EXPECTED_MONGO_BSON)
  end
end
