curl "https://calm-island-25666.herokuapp.com/teams/${ID}" \
--include \
--request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
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
