json.array!(@custom_answers) do |custom_answer|
  json.extract! custom_answer, :paper_id, :directive_no, :custom_id, :question_no, :answer
  json.url custom_answer_url(custom_answer, format: :json)
end
