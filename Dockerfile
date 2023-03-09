FROM ubuntu:latest
RUN apt-get clean all && apt-get update -y && apt-get upgrade -y && apt-get install npm -y
WORKDIR /service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "npm-start" ]
