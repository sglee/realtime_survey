json.array!(@paper_histories) do |paper_history|
  json.extract! paper_history, :user_id, :paper_id, :start_date, :status
  json.url paper_history_url(paper_history, format: :json)
end
