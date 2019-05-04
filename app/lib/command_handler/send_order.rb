module CommandHandler
  class SendOrder
    include Command::Handler

    def call(command)
      with_aggregate(Domain::Order, command.aggregate_id, &:send)
    end
  end
end
