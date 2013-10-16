json.array!(@customs) do |custom|
  json.extract! custom, :custom_id, :pwd, :hp, :reg_date, :is_finished, :email, :is_allowed, :is_member, :job, :age, :sex, :job_code
  json.url custom_url(custom, format: :json)
end
