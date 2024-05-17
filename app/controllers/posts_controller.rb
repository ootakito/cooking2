class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :set_search

  def index
    @posts = Post.order(created_at: :desc).limit(9)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      set_primary_image_metadata(@post)
      redirect_to posts_path, notice: '投稿が成功しました。'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
  end

  def edit
    redirect_to root_path unless current_user.id == @post.user_id
  end

  def update
    if current_user.id == @post.user_id
      if @post.update(post_params)
        remove_images
        redirect_to post_path(@post)
      else
        render :edit, status: :unprocessable_entity
      end
    else
      redirect_to root_path
    end
  end

  def destroy
    if current_user.id == @post.user_id
      @post.destroy
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def search
    @q = Post.ransack(params[:q])
    @posts = @q.result
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def set_search
    @q = Post.ransack(params[:q])
  end

  def post_params
    params.require(:post).permit(:title, :description, images: [], remove_image_ids: []).merge(user_id: current_user.id)
  end

  def remove_images
    if params[:post][:remove_image_ids].present?
      params[:post][:remove_image_ids].each do |image_id|
        image = @post.images.find(image_id)
        image.purge
      end
    end
  end

  def set_primary_image_metadata(post)
    return unless post.images.attached?

    post.images.each_with_index do |image, index|
      if index == 0
        image.metadata['primary'] = true
        image.save
      else
        image.metadata['primary'] = false
        image.save
      end
    end
  end
end
