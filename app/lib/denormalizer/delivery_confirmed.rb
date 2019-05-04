module Denormalizer
  class DeliveryConfirmed
    def call(event)
      confirm_delivery_with_number(event.data)
    end

    private

    def confirm_delivery_with_number(data)
      delivery = Delivery.find(data[:id])
      delivery.state = "confirmed"
      delivery.number = data[:number]
      delivery.save!
    end
  end
end
