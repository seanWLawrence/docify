class DocifyV2Schema < GraphQL::Schema
  query Types::Query

  # GraphQL::Batch setup:
  use GraphQL::Batch

  def self.id_from_object(object, type_definition, query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  def self.object_from_id(id, query_ctx)
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
  end

  def self.resolve_type(type, obj, ctx)
    case obj
    when User
      Types::User
    when Document
      Types::Document
    else
      raise("Unexpected object: #{obj}")
    end
  end
end
