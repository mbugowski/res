class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def new
    @order_uid = SecureRandom.uuid
    @products = Product.all
    @customers = Customer.all
  end

  def create
    cmd = Command::CreateOrder.new(order_uid: params[:order_uid], customer_id: params[:customer_id], product_id: params[:product_id])
    execute(cmd)
    redirect_to order_path(Order.find_by(uid: cmd.order_uid)), notice: 'Order was successfully submitted.'
  end

  def show
    @order = Order.find(params[:id])
    @product = Product.find(@order.product_id).name
  end
end
