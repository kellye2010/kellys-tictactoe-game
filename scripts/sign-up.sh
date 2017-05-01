#!/bin/bash

curl --include --request POST https://ga-wdi-boston.herokuapp.com/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
# data output from curl doesn't have a trailing newline
echo
