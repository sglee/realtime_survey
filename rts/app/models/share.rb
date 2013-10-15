class Share
  include Mongoid::Document
  field :from_user_id, type: Integer
  field :to_user_id, type: Integer
  field :to_email, type: String
  field :created_at, type: Time
  field :url, type: String

  #belongs_to :from_user_id
  #belongs_to :to_user

   validates_format_of :to_email, 
            :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  #belongs_to :from, foreign_key: 'from_user_id', class_name: 'User'
  #belongs_to :to, foreign_key: 'to_user_id', class_name: 'User'
end
