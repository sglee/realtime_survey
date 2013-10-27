class Groupinfo
  include Mongoid::Document
  field :code, type: String
  field :name, type: String
  field :is_use, type: String
  field :user_id, type: String

  has_many :paper
  belongs_to :manager
end
