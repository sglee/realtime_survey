class Manager
  include Mongoid::Document
  field :user_id, type: String
  field :pwd, type: String
  field :name, type: String
  field :hp, type: String
  field :email, type: String
  field :auth_code, type: String
  field :is_use, type: String

  has_many :paper
  has_many :paper_history
  belongs_to :authority
end
