#base image
FROM node:8.10-alpine

#RUN apt-get update && apt-get add git

RUN apk get update && apk add yarn
#set working directory

RUN mkdir /app

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#copy all files from current directory to docker
COPY . .

RUN npm install 

#start app
CMD ["npm", "start"]

EXPOSE 3000
