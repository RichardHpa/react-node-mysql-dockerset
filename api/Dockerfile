FROM node:15-alpine

WORKDIR /dockerApiFolder

COPY package*.json ./

RUN npm install

RUN echo 'hello'

COPY . ./

# CMD ["npm", "start"]
CMD [ "npm", "run", "start:dev" ]
