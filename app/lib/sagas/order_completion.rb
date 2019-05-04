module Sagas
  class OrderCompletion
    include Saga

    PAID = Domain::Order::PAID

    class State
      def initialize(command_bus:)
        @command_bus = command_bus
      end

      def apply_initialized_delivery(data)
        create_delivery(data)
      end

      def apply_created_invoice(data)
        create_invoice(data)
      end

      def apply_order_sent(data)
        delivery = Delivery.find(data[:id])
        cmd = Command::SendOrder.new(delivery_id: delivery.id, order_uid: delivery.order_uid, number: delivery.number)
        @command_bus.call(cmd)
      end

      private

      def create_delivery(data)
        Delivery.create(order_uid: data[:order_uid], state: "created")
      end

      def create_invoice(data)
        Invoice.create(order_uid: data[:order_uid])
      end
    end

    def call(event)
      state = State.new(command_bus: command_bus)

      case event
      when Event::OrderPaid
        state.apply_initialized_delivery(event.data)
        state.apply_created_invoice(event.data)
      when Event::DeliveryConfirmed
        state.apply_order_sent(event.data)
      end
    end
  end
end
