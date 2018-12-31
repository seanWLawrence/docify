module Mutations
  class Base < GraphQL::Schema::Mutation
    def current_user
      context[:current_user]
    end
  end
end
