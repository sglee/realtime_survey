class QuestionItem
  include Mongoid::Document
  #field :question_no, type: Integer
  field :paper_id, type: Integer
  field :directive_no, type: Integer
  field :question, type: String
  field :img_url, type: String

  auto_increment :question_no

  belongs_to :directive
  #has_many :customanswer
end
