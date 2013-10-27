json.array!(@groupinfos) do |groupinfo|
  json.extract! groupinfo, :code, :name, :is_use
  json.url groupinfo_url(groupinfo, format: :json)
end
