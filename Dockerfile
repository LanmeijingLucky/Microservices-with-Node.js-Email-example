FROM ubuntu:latest
RUN apt-get clean all && apt-get update -y && apt-get upgrade -y
WORKDIR /service
COPY COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
