class CustomAnswer
  include Mongoid::Document
  field :paper_id, type: Integer
  field :directive_no, type: Integer
  field :custom_id, type: String
  field :question_no, type: Integer
  field :answer, type: String
end
