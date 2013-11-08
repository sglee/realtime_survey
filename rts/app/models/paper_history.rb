class PaperHistory
  include Mongoid::Document
  field :user_id, type: String
  field :paper_id, type: Integer
  field :start_date, type: Date
  field :status, type: String

  field :groupinfo_code, type: String
  field :groupinfo_name, type: String
  field :paper_type_code, type: String
  field :paper_type_name, type: String

  belongs_to :paper
  belongs_to :manager
end
