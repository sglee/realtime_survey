class Authority
  include Mongoid::Document
  field :auth_code, type: String
  field :auth_name, type: String
  field :is_use, type: String
end
