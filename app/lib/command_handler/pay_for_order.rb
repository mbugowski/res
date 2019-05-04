module CommandHandler
  class PayForOrder
    include Command::Handler

    def call(command)
      with_aggregate(Domain::Order, command.aggregate_id, &:pay)
    end
  end
end
