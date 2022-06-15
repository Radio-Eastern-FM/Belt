FROM node:14

WORKDIR /usr/src/app/scheduler

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
