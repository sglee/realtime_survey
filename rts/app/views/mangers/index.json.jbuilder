json.array!(@mangers) do |manger|
  json.extract! manger, :paper_type, :code, :name
  json.url manger_url(manger, format: :json)
end
