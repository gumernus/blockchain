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
  "timestamp": 1638285067891,
  "order": 0
 },
 {
  "data": "dbGdUUlGadRC",
  "prev": {
   "data": "block-one",
   "timestamp": 1638285067891,
   "order": 0
  },
  "timestamp": 1638285067904,
  "order": 1
 },
 {
  "data": "hLXAHzecQCTw",
  "prev": {
   "data": "dbGdUUlGadRC",
   "timestamp": 1638285067904,
   "order": 1
  },
  "timestamp": 1638285067906,
  "order": 2
 },
 {
  "data": "DtPoukYFuMVr",
  "prev": {
   "data": "hLXAHzecQCTw",
   "timestamp": 1638285067906,
   "order": 2
  },
  "timestamp": 1638285067906,
  "order": 3
 },
 {
  "data": "RAOUzHQiNWjz",
  "prev": {
   "data": "DtPoukYFuMVr",
   "timestamp": 1638285067906,
   "order": 3
  },
  "timestamp": 1638285067907,
  "order": 4
 },
 {
  "data": "trOBtfNESJDf",
  "prev": {
   "data": "RAOUzHQiNWjz",
   "timestamp": 1638285067907,
   "order": 4
  },
  "timestamp": 1638285067907,
  "order": 5
 }
]
```
