class DocifySchema < GraphQL::Schema
  query Types::Query
  mutation Types::Mutation

  # GraphQL::Batch setup:
  # use GraphQL::Batch

  def self.object_from_id(node_id, _ctx)
    return nil if node_id.nil?

    puts type_name
    puts item_id
    type_name.constantize.find(item_id)
  end

  def self.id_from_object(object, _type, _ctx)
    GraphQL::Schema::UniqueWithinType.encode(object.class.name, object.id)
  end

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
