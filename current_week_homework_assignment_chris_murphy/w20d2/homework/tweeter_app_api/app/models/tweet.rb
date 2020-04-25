class Tweet < ApplicationRecord
    has_many :reviews
    validates :title, presence: true
    validates :content, presence: true, uniqueness: true
    validates :author, presence: true
end
