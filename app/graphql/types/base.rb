class Types::Base < GraphQL::Schema::Object
  implements GraphQL::Relay::Node.interface

  global_id_field :id

  field :node, field: GraphQL::Relay::Node.field
end
