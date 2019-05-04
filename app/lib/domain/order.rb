module Domain
  class Order
    include AggregateRoot

    CREATED = :created
    PAID = :paid
    SENT = :sent

    def initialize(id)
      @id = id
    end

    def create(customer_id:, product_id:, status:)
      event_data = { order_uid: @id, customer_id: customer_id, product_id: product_id, status: status }
      apply Event::OrderCreated.new(data: event_data)
    end

    def pay
      event_data = { order_uid: @id, status: "paid" }

      apply Event::OrderPaid.new(data: event_data)
    end

    def send
      event_data = { order_uid: @id }

      apply Event::OrderSent.new(data: event_data)
    end

    on Event::OrderCreated do |event|
      @order_uid = event.data[:order_uid]
      @product_id = event.data[:product_id]
      @customer_id = event.data[:customer_id]
      @status = CREATED
    end

    on Event::OrderPaid do |event|
      @order_uid = event.data[:order_uid]
      @status = PAID
    end

    on Event::OrderSent do |event|
      @order_uid = event.data[:order_uid]
      @status = SENT
    end
  end
end
