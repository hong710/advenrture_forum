class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_title, :content, :user_id, :published
  has_many :comments
  has_many :categories
  belongs_to :user
end
