
class Scalars::TimeStamp < Scalars::Base
  description "Date and time in ISO 8601"

  def self.coerce_input(input_value, _context)
    input_value.try(:iso8601)
  end

  def self.coerce_result(ruby_value, _context)
    ruby_value.try(:iso8601)
  end
end
