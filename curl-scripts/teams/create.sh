curl "https://calm-island-25666.herokuapp.com/teams" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "team": {
    "name": "'"${NAME}"'",
    "coach": "'"${COACH}"'",
    "mascot": "'"${MASCOT}"'",
    "record": "'"${RECORD}"'",
    "city": "'"${CITY}"'"
  }
}'
echo
