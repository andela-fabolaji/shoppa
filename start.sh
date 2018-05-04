#!/bin/sh

if [ $NODE_ENV = "production" ]; then
  node dist/server.js;
else
  nodemon --exec babel-node server/index.js;
fi