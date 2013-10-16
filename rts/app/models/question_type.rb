class QuestionType
  include Mongoid::Document
  field :q_type, type: String
  field :q_type_name, type: String
end
