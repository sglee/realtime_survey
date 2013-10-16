class Manger
  include Mongoid::Document
  field :paper_type, type: String
  field :code, type: String
  field :name, type: String
end
