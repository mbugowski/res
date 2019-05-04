module Domain
  class Delivery
    include AggregateRoot

    CREATED = :created
    CONFIRMED = :confirmed

    def initialize(id)
      @id = id
    end

    def confirm(number:)
      event_data = { id: @id, number: number }

      apply Event::DeliveryConfirmed.new(data: event_data)
    end

    on Event::DeliveryConfirmed do |event|
      @id = event.data[:id]
      @number = event.data[:number]
      @state = CONFIRMED
    end
  end
end
