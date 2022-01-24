class User < ApplicationRecord
    has_many :posts
    has_many :users_comments
    has_many :comments, through: :users_comments
end
