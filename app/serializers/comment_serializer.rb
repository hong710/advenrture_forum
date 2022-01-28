class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_many :users
  has_many :posts
end
