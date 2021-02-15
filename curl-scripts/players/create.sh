curl "https://calm-island-25666.herokuapp.com/players" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "player": {
    "name": "'"${NAME}"'",
    "position": "'"${POSITION}"'"
  }
}'
echo
