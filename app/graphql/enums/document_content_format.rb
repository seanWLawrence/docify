module Enums
  class DocumentContentFormat < Enums::Base
    value 'HTML', 'An HTML format of the content', value: :html
    value 'MARKDOWN', 'A Markdown format of the content', value: :markdown
  end
end
