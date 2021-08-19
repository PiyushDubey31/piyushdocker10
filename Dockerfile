FROM node:14
WORKDIR home/piyush/piyushdocker10
COPY package*.json ./
RUN npm install
copy . .
EXPOSE 3002
CMD [ "node", "server.js" ]