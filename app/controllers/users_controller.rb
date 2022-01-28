class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find(params[:id])
        posts_user = user.posts
        render json: posts_user, status: :ok
    end

    def index
        render json: User.all, status: :ok
    end

    def updated
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private 
     
    def user_params
        params.permit(:f_name, :l_name, :email, :password, :user_img)
     end

     def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
     end

     def render_unprocessable_entity_response(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
     end
end
