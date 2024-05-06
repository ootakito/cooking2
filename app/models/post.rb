class Post < ApplicationRecord
  belongs_to :user

  validates :image_title_one, presence: true
  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 200 }
end
