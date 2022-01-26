class UserSerializer < ActiveModel::Serializer
  attributes :id, :f_name, :l_name, :email, :user_img
  has_many :comments
  has_many :posts
end
