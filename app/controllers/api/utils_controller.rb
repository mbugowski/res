module Api
  class UtilsController < ApiController
    def product_customer_options
      products = to_id_name_h(Product.all.pluck(:id, :name))
      customers = to_id_name_h(Customer.all.pluck(:id, :name))
      product_customer_options = { products: products, customers: customers }
      render json: product_customer_options
    end
    private

    def to_id_name_h(collection)
      collection.map { |item| { id: item[0], name: item[1] } }
    end
  end
end