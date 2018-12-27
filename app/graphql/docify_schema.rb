class DocifySchema < GraphQL::Schema
  query Types::Query
  mutation Types::Mutation

  # GraphQL::Batch setup:
  # use GraphQL::Batch


  def self.resolve_type(type, obj, ctx)
    case obj
    when User
      Types::User
    when Document
      Types::Document
    when Mutation
      Types::Mutation
    else
      raise("Unexpected object: #{obj}")
    end
  end
end
