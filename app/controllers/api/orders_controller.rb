module Api
  class OrdersController < ApiController
    def index
      @orders = Order.all
      render json: @orders
    end

    def create
      order_uid = SecureRandom.uuid
      cmd = Command::CreateOrder.new(order_uid: order_uid, customer_id: params[:customer_id], product_id: params[:product_id])
      execute(cmd)
      render json: ::Order.find_by(uid: cmd.order_uid), status: :created
    end

    def show
      order = Order.find(params[:id])
      product = Product.find(order.product_id).name
      invoice = Invoice.find_by(order_uid: order.uid)
      delivery = Delivery.find_by(order_uid: order.uid)
      render json: { order: order, product: product, invoice: invoice, delivery: delivery }
    end

    def pay
      order = Order.find(params[:id])
      execute(Command::PayForOrder.new(order_uid: order.uid))
      product = Product.find(order.product_id).name
      invoice = Invoice.find_by(order_uid: order.uid)
      delivery = Delivery.find_by(order_uid: order.uid)
      order = Order.find(params[:id])
      render json: { order: order, product: product, invoice: invoice, delivery: delivery }
    end
  end
end
