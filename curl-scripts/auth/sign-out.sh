curl "https://calm-island-25666.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json"\
  --header "Authorization: Bearer ${TOKEN}"

echo
