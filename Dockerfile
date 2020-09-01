FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

COPY tsconfig.json ./

RUN yarn tsc

EXPOSE 8080

CMD ["yarn", "start"]
