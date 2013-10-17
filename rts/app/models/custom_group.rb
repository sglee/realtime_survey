class CustomGroup
  include Mongoid::Document
  field :custom_id, type: String
  field :code, type: String

  belongs_to :custom
  belongs_to :groupinfo
end
