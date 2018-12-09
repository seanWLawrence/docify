class Ability
  include CanCan::Ability

  def initialize(user)

    # Handle the case where we don't have a current_user i.e. the user is a guest
    user ||= User.new

    can :read, Document, private: false

    can :manage, Document, user_id: user.id

    puts user.id

    if user.present?
    end
  end
end
