json.array!(@directives) do |directive|
  json.extract! directive, :paper_id, :directive_no, :content, :q_type
  json.url directive_url(directive, format: :json)
end
