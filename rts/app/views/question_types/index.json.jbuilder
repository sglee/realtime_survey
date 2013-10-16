json.array!(@question_types) do |question_type|
  json.extract! question_type, :q_type, :q_type_name
  json.url question_type_url(question_type, format: :json)
end
