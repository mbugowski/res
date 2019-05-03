require "aggregate_root"

Rails.configuration.to_prepare do
  Rails.configuration.event_store = event_store = RailsEventStore::Client.new
  Rails.configuration.command_bus = command_bus = Arkency::CommandBus.new

  Cqrs.new(command_bus: command_bus, event_store: event_store).orchestrate

  AggregateRoot.configure do |config|
    config.default_event_store = Rails.configuration.event_store
  end
end
