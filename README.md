# Blockchain web service

## Node.js framework
Express

## Get block
GET http://localhost:8000/block/[height]

Example: GET request for block 0

GET URL path: http://localhost:8000/block/0
Response output:

{"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457","previousBlockHash":""}

## Save block
POST http://localhost:8000/block

Post data should be in the following formate
{body:"block data"}

Example: POST request for a new block

POST URL path: http://localhost:8000/block
Content-Type: application/json
Request body: {"body":"block body contents"}