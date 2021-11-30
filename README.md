# Gumernus's Blockchain
## Requirements
- tsc
- node / nodemon
## Run
Two conosles needed
- `tsc -w` run typescript in watch mode
- `node ./prod` run node on javascript folder
- `nodemon ./prod` run nodemon on javascript folder (developing)
## Chain Example
```json
[
 {
  "data": "block-one",
  "timestamp": 1638292512586,
  "order": 0,
  "transfers": [],
  "prev": {
   "data": false,
   "timestamp": false,
   "order": false
  }
 },
 {
  "data": "awpmYksgrcnz",
  "timestamp": 1638292512587,
  "order": 1,
  "transfers": [],
  "prev": {
   "data": "block-one",
   "timestamp": 1638292512586,
   "order": 0
  }
 },
 {
  "data": "ATEpQpHEVQGV",
  "timestamp": 1638292512602,
  "order": 2,
  "transfers": [],
  "prev": {
   "data": "awpmYksgrcnz",
   "timestamp": 1638292512587,
   "order": 1
  }
 }
]
```
## Disclaimer
This repo is only for testing and for me to learn blockchain technology and learn typescript.
