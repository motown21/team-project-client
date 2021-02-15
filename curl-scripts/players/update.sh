curl "https://calm-island-25666.herokuapp.com/players/${ID}" \
--include \
--request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "player": {
      "name": "'"${NAME}"'",
      "position": "'"${POSITION}"'"
    }
  }'

echo
