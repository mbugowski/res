class AddNumberToDelivery < ActiveRecord::Migration[6.0]
  def change
    add_column :deliveries, :number, :string
  end
end
