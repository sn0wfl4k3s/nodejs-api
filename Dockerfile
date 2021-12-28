FROM node:16.13.1-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE ${PORT}

CMD [ "yarn", "dev" ]