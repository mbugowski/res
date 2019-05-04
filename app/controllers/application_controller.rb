class ApplicationController < ActionController::Base
  include CqrsController
  extend Forwardable
  def_delegator :command_bus, :call, :execute
end
