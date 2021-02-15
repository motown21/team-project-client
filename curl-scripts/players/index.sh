curl "https://calm-island-25666.herokuapp.com/players"  \
--include \
--request GET \
--header "Content-type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \

echo
