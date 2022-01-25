class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_title, :content, :user_id, :published
end
