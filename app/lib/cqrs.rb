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
  end

  def register_commands
    register(Command::CreateOrder, CommandHandler::CreateOrder.new)
  end
end
