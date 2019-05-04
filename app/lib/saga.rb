module Saga
  def command_bus
    Rails.application.config.command_bus
  end
end
