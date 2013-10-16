class CustomGroup
  include Mongoid::Document
  field :custom_id, type: String
  field :code, type: String
end
