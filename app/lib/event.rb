module Event
  OrderCreated = Class.new(RailsEventStore::Event)
  OrderPaid = Class.new(RailsEventStore::Event)
  DeliveryConfirmed = Class.new(RailsEventStore::Event)
  OrderSent = Class.new(RailsEventStore::Event)
end
