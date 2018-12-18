class Types::Base < GraphQL::Schema::Object
  implements GraphQL::Relay::Node.interface

  def current_user
    context[:current_user]
  end

  global_id_field :id

  field :node, field: GraphQL::Relay::Node.field
end
