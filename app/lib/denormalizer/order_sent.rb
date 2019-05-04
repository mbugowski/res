module Denormalizer
  class OrderSent
    def call(event)
      mark_order_as_sent(event.data)
    end

    private

    def mark_order_as_sent(data)
      Order.find_by_uid(data[:order_uid]).update!(status: "sent")
    end
  end
end
