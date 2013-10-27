class PaperType
  include Mongoid::Document
  field :paper_type_code, type: String
  field :name, type: String
  field :user_id, type: String

  has_many :paper
  has_many :manager
end
