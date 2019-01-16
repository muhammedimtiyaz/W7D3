json.pokemon do
  json.merge! @pokemon.attributes
  json.item_ids @pokemon.item_ids
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.merge! item.attributes
    end
  end
end