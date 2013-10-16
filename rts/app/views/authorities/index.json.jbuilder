json.array!(@authorities) do |authority|
  json.extract! authority, :auth_code, :auth_name, :is_use
  json.url authority_url(authority, format: :json)
end
