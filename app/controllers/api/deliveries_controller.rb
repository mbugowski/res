module Api
  class DeliveriesController < ApiController
    def update
      execute(Command::ConfirmDelivery.new(delivery_id: params[:id], number: params[:delivery][:number]))
      delivery = Delivery.find(params[:id])
      order = Order.find_by(uid: delivery.order_uid)

      render json: { order: order, delivery: delivery }
    end
  end
end