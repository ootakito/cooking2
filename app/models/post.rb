class Post < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many_attached :images

  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 200 }
  validate :validate_images

  def liked_by?(user)
    likes.where(user_id: user.id).exists?
  end

  def like_count
    likes.count
  end

  def self.ransackable_attributes(auth_object = nil)
    ["title", "description"]
  end

  def primary_image
    images.find { |image| image.metadata['primary'] } || images.first
  end

  private

  def validate_images
    if images.attached?
      errors.add(:images, 'must be at least one image') if images.length < 1
      errors.add(:images, 'can\'t be more than 3 images') if images.length > 3
    else
      errors.add(:images, 'must be attached')
    end
  end
end
