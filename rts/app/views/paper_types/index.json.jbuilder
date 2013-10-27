json.array!(@paper_types) do |paper_type|
  json.extract! paper_type, :paper_type_code, :name, :user_id
  json.url paper_type_url(paper_type, format: :json)
end
