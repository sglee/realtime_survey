class Job
  include Mongoid::Document
  field :job_code, type: String
  field :job_name, type: String

  has_many :custom
end
