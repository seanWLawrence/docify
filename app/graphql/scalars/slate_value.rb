module Scalars
  class SlateValue < Scalars::Base
    description 'Slate.js editor `Value` type'

    # we're using this scalar to convert the JSON string into a Ruby hash
    # so we can type check the JSON object
    def self.coerce_input(input_value, _context)
      slate_value = JSON.parse(input_value)

      document = slate_value['document']

      if document.nil?
        raise GraphQL::CoercionError,
              "#{input_value.inspect} does not contain a `document` property"

      elsif document['nodes'].nil?
        raise GraphQL::CoercionError,
              "#{input_value.inspect} does not contain a `nodes` property
               on `document`"

      else
        # if passes type checks return the same strigified JSON object
        input_value
      end
    end

    def self.coerce_result(ruby_value, _context)
      # no changes were made, return as is
      ruby_value
    end
  end
end
