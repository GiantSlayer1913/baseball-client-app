#!/bin/bash

curl "http://localhost:4741/players/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
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
