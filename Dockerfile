FROM node:8.9.4-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache git openssl ca-certificates make gcc g++ python

WORKDIR /src

RUN npm install -g webpack

COPY package.json .
RUN yarn install --production --frozen-lockfile

COPY . .
RUN webpack


EXPOSE 3000
CMD yarn start
