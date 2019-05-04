module CommandHandler
  class CreateOrder
    include Command::Handler

    def call(command)
      with_aggregate(Domain::Order, command.aggregate_id) do |order|
        order.create(
          product_id: command.product_id,
          customer_id: command.customer_id,
          status: "created"
        )
      end
    end
  end
end
