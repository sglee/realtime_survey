json.array!(@answers) do |answer|
  json.extract! answer, :paper_id, :directivce_no, :answer
  json.url answer_url(answer, format: :json)
end
