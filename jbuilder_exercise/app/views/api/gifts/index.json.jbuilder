#json.array! @gifts do |gift|
# json.title gift.title
#  json.description gift.description
#end

json.gifts do
  @gifts.each do |gift|
    json.set! gift.id do
      json.id gift.id
      json.title gift.title
      json.description gift.description
    end
  end
end