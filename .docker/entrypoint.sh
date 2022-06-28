#!/bin/bash

npm install --force
npm run build 
npx typeorm migration:run
npm run start:dev
