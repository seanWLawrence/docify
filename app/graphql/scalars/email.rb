module Scalars
  class Email < Scalars::Base
    def self.coerce_input(input_value, _context)
      email_regex = URI::MailTo::EMAIL_REGEXP

      if email_regex === input_value
        input_value
      else
        raise GraphQL::CoercionError,
              "#{input_value.inspect} is not a valid email"
      end
    end

    def self.coerce_result(ruby_value, _context)
      ruby_value
    end
  end
end
