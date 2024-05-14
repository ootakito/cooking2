class MypageController < ApplicationController
  before_action :authenticate_user!
  before_action :set_search

  def index
    @posts = current_user.posts
  end

  private

  def set_search
    @q = Post.ransack(params[:q])
  end
end
