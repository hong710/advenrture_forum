class Comment < ApplicationRecord
    has_many :posts_comments
    has_many :posts, through: :posts_comments

    has_many :users_comments
    has_many :users, through: :users_comments
end
