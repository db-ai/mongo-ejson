RSpec.describe EJSON do
  it "has a version number" do
    expect(EJSON::VERSION).not_to be nil
  end

  fixtures = Dir[File.join(File.dirname(__FILE__), 'fixtures/pass/*.json')].sort
  fixtures.each do |fixture|
    content = File.read(fixture)

    it "parse_wrap passes '#{fixture}'" do
      expect { EJSON.parse_wrap(content) }
        .not_to raise_error
    end

    it "parse_bson passes '#{fixture}'" do
      expect { EJSON.parse_bson(content) }
        .not_to raise_error
    end
  end

  fixtures = Dir[File.join(File.dirname(__FILE__), 'fixtures/fail/*.json')].sort
  fixtures.each do |fixture|
    content = File.read(fixture)

    it "parse_wrap fails '#{fixture}'" do
      expect { EJSON.parse_wrap(content) }
        .to raise_error(ExtendedJSON::ParseError)
    end

    it "parse_bson fails '#{fixture}'" do
      expect { EJSON.parse_bson(content) }
        .to raise_error(ExtendedJSON::ParseError)
    end
  end
end
