json.array!(@paper_types) do |paper_type|
  json.extract! paper_type, :code, :name
  json.url paper_type_url(paper_type, format: :json)
end
