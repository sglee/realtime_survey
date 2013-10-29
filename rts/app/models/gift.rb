class Gift
  include Mongoid::Document
  #field :gift_no, type: Integer
  field :paper_id, type: Integer
  field :custom_id, type: String

  auto_increment :gift_no

  belongs_to :custom
  belongs_to :paper
end
