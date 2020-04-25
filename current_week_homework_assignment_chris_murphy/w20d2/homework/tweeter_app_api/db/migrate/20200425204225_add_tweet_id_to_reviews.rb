class AddTweetIdToReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :tweet_id, :integer
  end
end
