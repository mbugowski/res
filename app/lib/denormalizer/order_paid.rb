module Denormalizer
  class OrderPaid
    def call(event)
      mark_order_as_paid(event.data)
    end

    private

    def mark_order_as_paid(data)
      order = Order.find_by(uid: data[:order_uid])
      order.status = data[:status]
      order.save!
    end
  end
end
