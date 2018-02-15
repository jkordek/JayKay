FROM node:8.9.4-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache git openssl ca-certificates make gcc g++ python

WORKDIR /src

COPY package.json .
RUN yarn install --production --frozen-lockfile

COPY . .
RUN yarn webpack


EXPOSE 3000
CMD yarn start
