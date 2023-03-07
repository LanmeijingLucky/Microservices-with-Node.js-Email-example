FROM ubuntu:latest
RUN apt-get clean all && apt-get update -y && apt-get upgrade -y
