class Post < ApplicationRecord
  belongs_to :user
  has_many :likes
  has_one_attached :image
  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 200 }
  def liked_by?(user)
    likes.where(user_id: user.id).exists?
  end
  def like_count
    likes.count
  end
  def self.ransackable_attributes(auth_object = nil)
    ["title", "description"]
  end
end
