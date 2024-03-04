FROM node:15-alpine

WORKDIR /dockerReactFolder

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]
