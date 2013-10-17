class Answer
  include Mongoid::Document
  field :paper_id, type: String
  field :directivce_no, type: Integer
  field :answer, type: String

  belongs_to :directive
end
