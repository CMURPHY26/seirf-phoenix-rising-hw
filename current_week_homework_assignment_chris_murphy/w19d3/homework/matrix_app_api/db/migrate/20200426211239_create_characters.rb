class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :desciption
      t.string :image_url
      t.timestamps
    end
  end
end
