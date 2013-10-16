json.array!(@jobs) do |job|
  json.extract! job, :job_code, :job_name
  json.url job_url(job, format: :json)
end
