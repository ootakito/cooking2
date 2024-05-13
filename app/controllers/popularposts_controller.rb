class PopularpostsController < ApplicationController
  def index
    @posts = Post.includes(:likes).sort_by { |post| -post.likes.count }.take(9)
  end
end
