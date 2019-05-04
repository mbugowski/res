class Cqrs
  delegate :register, to: :command_bus
  delegate :subscribe, to: :event_store

  def initialize(event_store:, command_bus:)
    @event_store = event_store
    @command_bus = command_bus
  end

  def orchestrate
    subscribe_to_events
    register_commands
  end

  private

  attr_reader :event_store, :command_bus

  def subscribe_to_events
    subscribe(Denormalizer::OrderCreated.new, to: [Event::OrderCreated])
    subscribe(Denormalizer::OrderPaid.new, to: [Event::OrderPaid])
    subscribe(Sagas::OrderCompletion.new, to: [Event::OrderPaid, Event::DeliveryConfirmed])
    subscribe(Denormalizer::DeliveryConfirmed.new, to: [Event::DeliveryConfirmed])
    subscribe(Denormalizer::OrderSent.new, to: [Event::OrderSent])
  end

  def register_commands
    register(Command::CreateOrder, CommandHandler::CreateOrder.new)
    register(Command::PayForOrder, CommandHandler::PayForOrder.new)
    register(Command::ConfirmDelivery, CommandHandler::ConfirmDelivery.new)
    register(Command::SendOrder, CommandHandler::SendOrder.new)
  end
end
