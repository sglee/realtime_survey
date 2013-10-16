json.array!(@question_items) do |question_item|
  json.extract! question_item, :question_no, :paper_id, :directive_no, :question, :img_url
  json.url question_item_url(question_item, format: :json)
end
