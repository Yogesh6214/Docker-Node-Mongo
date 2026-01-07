FROM node:25-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Install all dependencies (not just production) for nodemon hot reload
RUN npm ci

COPY . .

CMD ["npm", "run", "start"]