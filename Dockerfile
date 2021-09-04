# Dockerfile for entire application
#FROM node:16-alpine
FROM node:16

WORKDIR /app
COPY package.json .
RUN npm install

COPY fonts/ fonts/
COPY images/ images/
COPY src/ src/
COPY db/db.js db/db.js

CMD node src/app.js
