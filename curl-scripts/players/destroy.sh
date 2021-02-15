curl "https://calm-island-25666.herokuapp.com/players/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
