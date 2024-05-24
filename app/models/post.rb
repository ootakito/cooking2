class Post < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many_attached :images
  validate :validate_image_presence
  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 200 }
  def liked_by?(user)
    likes.where(user_id: user.id).exists?
  end

  def liked_by?(user)
    return false unless user
    likes.where(user_id: user.id).exists?
  end

  def self.ransackable_attributes(auth_object = nil)
    ["title", "description"]
  end
  def validate_image_presence
    errors.add(:images, "can't be blank") if images.blank?
  end
end
