json.array!(@custom_groups) do |custom_group|
  json.extract! custom_group, :custom_id, :code
  json.url custom_group_url(custom_group, format: :json)
end
