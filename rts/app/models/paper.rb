class Paper
  include Mongoid::Document
  field :paper_id, type: String
  field :group_code, type: String
  field :user_id, type: String
  field :paper_type_code, type: String
  field :limit_time, type: Integer
  field :question_type, type: String
  field :is_automatic, type: String
  field :in_use, type: String
end
