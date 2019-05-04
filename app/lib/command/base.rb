module Command
  class Base
    extend Forwardable

    include Gate::Command

    def_delegator :result, :values_at

    def self.aggregate_id(name)
      define_method(:aggregate_id) do
        send(name)
      end
    end

    def self.def_getter(getter = nil, **args)
      return def_getter(getter => getter) unless getter.nil?

      args.each do |name, fields|
        fields = Array(fields)

        define_method(:"with_#{name}") do |&block|
          if fields.any? { |field| has?(field) }
            block.call(*values_at(*fields))
          end
        end
      end
    end
  end
end
