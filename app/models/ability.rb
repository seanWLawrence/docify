class Ability
  include CanCan::Ability

  def initialize(user)

    # Handle the case where we don't have a current_user i.e. the user is a guest
    user ||= User.new

    can :manage, Document

    can :manage, User

    # can :read, Document, private: false

    # can [:create, :new], User

    # if user.present?
    #   can :manage, Document, user_id: user.id
    # end
  end
end
