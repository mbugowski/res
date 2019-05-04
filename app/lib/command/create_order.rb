module Command
  class CreateOrder < Base
    attr_reader :order_uid
    aggregate_id :order_uid

    schema do
      required(:order_uid).filled
      required(:product_id).filled
      required(:customer_id).filled
    end
  end
end
