#!/bin/bash

# curl "http://localhost:3000/sign-out/$ID" \
# curl "http://httpbin.org/delete?id=$ID" \
#   --include \
#   --request DELETE
curl --include --request DELETE https://ga-wdi-boston.herokuapp.com/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
# ID=1 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/sign-out.sh
# data output from curl doesn't have a trailing newline
echo
