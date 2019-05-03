class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :status
      t.string :uid
      t.string :customer

      t.timestamps
    end
  end
end
