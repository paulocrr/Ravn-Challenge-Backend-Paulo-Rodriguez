FROM node:14

EXPOSE 8080

RUN npm install i npm@latest -g

WORKDIR /src

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]