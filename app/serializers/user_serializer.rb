class UserSerializer < ActiveModel::Serializer
  attributes :id, :f_name,:user_info, :l_name, :email, :user_img
  has_many :comments
  has_many :posts
end
