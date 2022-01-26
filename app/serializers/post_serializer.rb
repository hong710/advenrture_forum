class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_title, :content, :user_id, :published, :post_url
  has_many :comments, serializer: CommentUsersSerializer
  has_many :categories
  belongs_to :user
end
