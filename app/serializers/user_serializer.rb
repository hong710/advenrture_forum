class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :f_name, :l_name, :email
  has_many :comments
  has_many :posts
end
