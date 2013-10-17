class QuestionItem
  include Mongoid::Document
  field :question_no, type: Integer
  field :paper_id, type: String
  field :directive_no, type: Integer
  field :question, type: String
  field :img_url, type: String

  belongs_to :directive
  has_many :custom_answer
end
