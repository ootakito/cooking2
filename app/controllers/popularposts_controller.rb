class PopularpostsController < ApplicationController
  before_action :set_search

  def index
    @posts = Post.includes(:likes).sort_by { |post| -post.likes.count }.take(9)
  end

  private

  def set_search
    @q = Post.ransack(params[:q])
  end
end
