# Dockerfile for entire application
#FROM node:16-alpine
FROM node:16

WORKDIR /app
COPY package.json .
RUN npm install

COPY fonts/ fonts/
COPY images/ images/
COPY src/ src/


CMD npm start

