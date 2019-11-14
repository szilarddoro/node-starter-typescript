FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY tsconfig.json ./

RUN npm run tsc

EXPOSE 4500

CMD ["npm", "start"]
