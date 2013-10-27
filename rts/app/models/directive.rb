class Directive
  include Mongoid::Document
  field :paper_id, type: String
  field :directive_no, type: Integer
  field :content, type: String
  field :q_type, type: String

  has_many :answer
  has_many :questionitem
  has_many :customanswer
  
  belongs_to :paper
  belongs_to :questiontype

end
