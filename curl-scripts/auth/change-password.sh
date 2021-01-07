curl "https://calm-island-25666.herokuapp.com/change-password"  \
  --include \
  --request PATCH \
  --header "Authorizatin: Bearer ${TOKEN}"\
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
echo
