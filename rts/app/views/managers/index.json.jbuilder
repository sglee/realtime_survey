json.array!(@managers) do |manager|
  json.extract! manager, :user_id, :pwd, :name, :hp, :email, :auth_code, :is_use
  json.url manager_url(manager, format: :json)
end
