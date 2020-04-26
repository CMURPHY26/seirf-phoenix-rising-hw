class AddCharacterIdToVehiclesTable < ActiveRecord::Migration[6.0]
  def change
    add_column :vehicles, :character_id, :integer
  end
end
