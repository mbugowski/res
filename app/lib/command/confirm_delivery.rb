module Command
  class ConfirmDelivery < Base
    attr_reader :delivery_id
    aggregate_id :delivery_id

    schema do
      required(:delivery_id).filled
      required(:number).filled
    end
  end
end
