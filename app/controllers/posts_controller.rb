class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def show
        post = Post.find(params[:id])
        filter = post.comments.users
        render json: filter, status: :ok
    end

    def index
        posts= Post.all
        render json: posts, status: :ok
    end

    def updated
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post, status: :ok
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private 
     
    def post_params
        params.permit(:content, :user_id, :published, :post_title)
     end

     def render_not_found_response
        render json: { error: ":Post not found" }, status: :not_found
     end

     def render_unprocessable_entity_response(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
     end
end
