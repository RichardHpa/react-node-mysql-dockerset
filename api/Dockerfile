FROM node:15-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 5001

# CMD ["npm", "start"]
CMD [ "npm", "run", "start:dev" ]
