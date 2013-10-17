class PaperHistory
  include Mongoid::Document
  field :user_id, type: String
  field :paper_id, type: Integer
  field :start_date, type: Date
  field :status, type: String

  belongs_to :paper
  belongs_to :manager
end
