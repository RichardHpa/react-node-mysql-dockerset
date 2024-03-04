FROM node:15-alpine

WORKDIR /dockerApiFolder

COPY package*.json ./

RUN npm install

COPY . ./

# CMD ["npm", "start"]
CMD [ "npm", "run", "start:dev" ]
