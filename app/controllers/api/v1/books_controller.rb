# frozen_string_literal: true

module Api
  module V1
    class BooksController < ApiController
      def index
        render json: Book.all
      end

      def show
        render json: Book.find(params[:id])
      end
    end
  end
end
