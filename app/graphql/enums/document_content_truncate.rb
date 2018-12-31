class Enums::DocumentContentTruncate < Enums::Base
  value 'NONE', 'Full document', value: :none
  value 'FIRST_BLOCK', 'First HTML block, i.e. <h1></h1>', value: :first_block
end