class CreateDeliveries < ActiveRecord::Migration[6.0]
  def change
    create_table :deliveries do |t|
      t.string :order_uid
      t.string :state

      t.timestamps
    end
  end
end
