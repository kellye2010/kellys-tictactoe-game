#!/bin/bash

#curl "http://localhost:3000/sign-in" \
# curl "http://httpbin.org/post" \
#   --include \
#   --request POST \
#   --data-urlencode ""
#
# echo

curl --include --request POST https://ga-wdi-boston.herokuapp.com/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'

 echo
