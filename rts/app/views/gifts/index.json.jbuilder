json.array!(@gifts) do |gift|
  json.extract! gift, :gift_no, :paper_id, :custom_id
  json.url gift_url(gift, format: :json)
end
