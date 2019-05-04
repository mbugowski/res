module Command
  class PayForOrder < Base
    attr_reader :order_uid
    aggregate_id :order_uid

    schema do
      required(:order_uid).filled
    end
  end
end
