class User < ApplicationRecord
    has_secure_password
    has_many :posts, dependent: :destroy
    has_many :users_comments
    has_many :comments, through: :users_comments
    
    validates :f_name, presence: true
    validates :l_name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
end
