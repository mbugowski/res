module Denormalizer
  class OrderCreated
    def call(event)
      create_order(event.data)
    end

    private

    def create_order(data)
      Order.create!(
        uid: data[:order_uid],
        product_id: data[:product_id],
        customer: Customer.find(data[:customer_id]).name,
        status: data[:status]
      )
    end
  end
end
