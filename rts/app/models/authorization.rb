class Authorization
  include Mongoid::Document
  field :provider, type: String
  field :string, type: String
  field :uid, type: String
  field :user_id, type: Integer
  field :token, type: String
  field :secret, type: String
  field :name, type: String
  field :url, type: String

  # Relationships.
  belongs_to :user
end
