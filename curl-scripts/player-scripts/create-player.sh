#!/bin/bash

curl "http://localhost:4741/players" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "player": {
      "team_id": "'"${TEAMID}"'",
      "name": "'"${NAME}"'",
      "position": "'"${POS}"'",
      "bat": "'"${BAT}"'",
      "throw": "'"${THROW}"'"
    }
  }'

echo
