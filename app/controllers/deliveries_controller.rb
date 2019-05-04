class DeliveriesController < ApplicationController
  def update
    execute(Command::ConfirmDelivery.new(delivery_id: params[:id], number: params[:delivery][:number]))
    redirect_to order_path(Order.find_by(uid: Delivery.find(params[:id]).order_uid))
  end
end
