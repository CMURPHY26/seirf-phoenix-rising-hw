class AddDefaultValueToColumn < ActiveRecord::Migration[6.0]
  def change
    change_column_default :tweets, :title, 'default value'
  end
end
