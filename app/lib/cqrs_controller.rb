module CqrsController
  def execute(cmd)
    event_store.with_metadata(command_meta) do
      command_bus.call(cmd)
    end
  end

  def command_meta
    { host: "#{request.scheme}://#{request.host}" }
  end

  def command_bus
    Rails.application.config.command_bus
  end

  def event_store
    Rails.application.config.event_store
  end
end
