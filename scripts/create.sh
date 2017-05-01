#!/bin/bash

# curl --include --request GET "http://localhost:4741/games" \
#   --header "Content-Type: application/json" \
#   --data '{
#   "game": {
#     "id": ,
#     "cells": ["","","","","","","","",""],
#     "over": false,
#     "player_x": {
#       "id": ,
#       "email": ""
#     },
#     "player_o": null
#   }
# }

curl --include --request POST http://localhost:4741/games \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data ''
