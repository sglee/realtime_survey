class Answer
  include Mongoid::Document
  field :paper_id, type: Integer
  field :directivce_no, type: Integer
  field :answer, type: String

  belongs_to :directive
end
