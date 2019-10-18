FROM node:alpine

RUN yarn global add json-server

WORKDIR /usr/app/src

EXPOSE 3333
