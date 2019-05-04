module Command
  class SendOrder < Base
    attr_reader :order_uid
    aggregate_id :order_uid

    schema do
      required(:order_uid).filled
      required(:delivery_id).filled
      required(:number).filled
    end
  end
end
