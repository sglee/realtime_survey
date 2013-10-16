json.array!(@papers) do |paper|
  json.extract! paper, :paper_id, :group_code, :user_id, :paper_type_code, :limit_time, :question_type, :is_automatic, :in_use
  json.url paper_url(paper, format: :json)
end
