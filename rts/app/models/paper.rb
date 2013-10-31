class Paper
  include Mongoid::Document
  #field :paper_id, type: String
  field :group_code, type: String
  field :user_id, type: String
  field :paper_type_code, type: String
  field :limit_time, type: Integer
  field :question_type, type: String
  field :is_automatic, type: String
  field :in_use, type: String

  auto_increment :paper_id

  belongs_to :groupinfo
  belongs_to :papertype
  belongs_to :manager
  
  # error ?
  #has_many :paperhistory 
  has_many :directive
  has_many :gift

end
