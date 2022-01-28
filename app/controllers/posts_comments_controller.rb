class PostsCommentsController < ApplicationController

    def create
        post_comment = PostsComment.create(post_comment_params)
        render json: post_comment, status: :created
    end

    private 
    def post_comment_params
        params.permit(:post_id, :comment_id)
    end
end
