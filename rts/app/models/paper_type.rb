class PaperType
  include Mongoid::Document
  field :code, type: String
  field :name, type: String

  has_many :paper
end
