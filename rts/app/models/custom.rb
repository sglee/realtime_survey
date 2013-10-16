class Custom
  include Mongoid::Document
  field :custom_id, type: String
  field :pwd, type: String
  field :hp, type: String
  field :reg_date, type: Date
  field :is_finished, type: String
  field :email, type: String
  field :is_allowed, type: String
  field :is_member, type: String
  field :job, type: String
  field :age, type: String
  field :sex, type: String
  field :job_code, type: String
end
