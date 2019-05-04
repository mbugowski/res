module CommandHandler
  class ConfirmDelivery
    include Command::Handler

    def call(command)
      with_aggregate(Domain::Delivery, command.aggregate_id) do |delivery|
        delivery.confirm(
          number: command.number
        )
      end
    end
  end
end
