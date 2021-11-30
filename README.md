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
  "prev": {
   "data": false,
   "timestamp": false,
   "order": false
  },
  "timestamp": 1638285149755,
  "order": 0
 },
 {
  "data": "nYEEcEzMrPKn",
  "prev": {
   "data": "block-one",
   "timestamp": 1638285149755,
   "order": 0
  },
  "timestamp": 1638285149767,
  "order": 1
 },
 {
  "data": "aCFIeSllRnHu",
  "prev": {
   "data": "nYEEcEzMrPKn",
   "timestamp": 1638285149767,
   "order": 1
  },
  "timestamp": 1638285149768,
  "order": 2
 },
 {
  "data": "UdrhYOAOttVl",
  "prev": {
   "data": "aCFIeSllRnHu",
   "timestamp": 1638285149768,
   "order": 2
  },
  "timestamp": 1638285149768,
  "order": 3
 }
]
```
