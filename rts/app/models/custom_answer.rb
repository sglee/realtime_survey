class CustomAnswer
  include Mongoid::Document
  field :paper_id, type: Integer
  field :directive_no, type: Integer
  field :custom_id, type: String
  field :question_no, type: Integer
  field :answer, type: String

  belongs_to :directive
  belongs_to :custom
  belongs_to :questionitem
end
