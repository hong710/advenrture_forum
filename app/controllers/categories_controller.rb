class CategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def show
        category = Category.find(params[:id])
        render json: category, status: :ok
    end

    def index
        render json: Category.all, status: :ok
    end

    def updated
        category = Category.find(params[:id])
        category.update!(category_params)
        render json: category, status: :ok
    end

    def destroy
        category = Category.find(params[:id])
        category.destroy
        head :no_content
    end

    private 
     
    def category_params
        params.permit(:category_title)
     end

     def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
     end

     def render_unprocessable_entity_response(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
     end


end
