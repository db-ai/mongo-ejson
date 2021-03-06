RSpec.describe EJSON do
  EXPECTED_WRAP = [
    'JSON Test Pattern pass1',
    {
      'unqoted_key'       => 123,
      '$millionDollarKey' => false,
    },
    {
      'object with 1 member' => ['array with 1 element'],
    },
    {}, [], -42, true, false, nil,
    {
      # Disabling AlignHash Cop die to an extra long key in the end that makes the hash unreadable.
      # rubocop:disable Layout/HashAlignment
      'integer'       => 1_234_567_890,
      'real'          => -9876.54321,
      'e'             => 1.23456789e-13,
      'E'             => 1.23456789e+34,
      # Disabling FloatOutOfRange Cop - we're expecting both Ruby and our parser to convert this value to Infinity
      ''              => 23_456_789_012e+666, # rubocop:disable Lint/FloatOutOfRange Style/ExponentialNotation
      'zero'          => 0,
      'one'           => 1,
      'space'         => ' ',
      'quote'         => '"',
      'backslash'     => '\\',
      'controls'      => "\b\f\n\r\t",
      'slash'         => '/ & \\/',
      'alpha'         => 'abcdefghijklmnopqrstuvwyz',
      'ALPHA'         => 'ABCDEFGHIJKLMNOPQRSTUVWYZ',
      'non-ascii'     => 'пёсик мокрый た鼻',
      'digit'         => '0123456789',
      'special'       => "`1~!@\#$%^&*()_+-={':[,]}|;.</>?",
      'hex'           => "\u0123\u4567\u89AB\uCDEF\uabcd\uef4A",
      'true'          => true,
      'false'         => false,
      'null'          => nil,
      'array'         => [],
      'object'        => {},
      'address'       => '50 St. James Street',
      'url'           => 'http://www.JSON.org/',
      'comment'       => '// /* <!-- --',
      '# -- --> */'   => ' ',
      ' s p a c e d ' => [1, 2, 3, 4, 5, 6, 7],
      'compact'       => [1, 2, 3, 4, 5, 6, 7],
      'jsontext'      => '{"object with 1 member":["array with 1 element"]}',
      'quotes'        => '&#34; " %22 0x22 034 &#x22;',
      "\\/\\\"\uCAFE\uBABE\uAB98\uFCDE\ubcda\uef4A\b\f\n\r\t`1~!@#$%^&*()_+-=[]{}|;:',./<>?" => 'A key can be any string', # rubocop:disable Metrics/LineLength

    },
    0.5, 98.6, 99.44, 1066,
    'rosebud'
    # rubocop:enable Layout/HashAlignment
  ].freeze

  it 'parses wrapped JSON types' do
    fixture = File.join(File.dirname(__FILE__), 'fixtures/pass/json_smoke.json')
    content = File.read(fixture)

    result = EJSON.parse_wrap(content)

    expect(result).to eq(EXPECTED_WRAP)
  end

  it 'parses mongo JSON types' do
    fixture = File.join(File.dirname(__FILE__), 'fixtures/pass/json_smoke.json')
    content = File.read(fixture)

    result = EJSON.parse_bson(content)

    expect(result).to eq(EXPECTED_WRAP)
  end

  it 'raises parser error on invalid date' do
    content = ' { date: ISODate("BooHaa")} '

    expect { EJSON.parse_wrap(content) }
      .to raise_error(ExtendedJSON::ParseError)
  end
end
