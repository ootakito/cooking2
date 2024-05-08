class Post < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 200 }
end
