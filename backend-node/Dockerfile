#base image
FROM node:8.7-alpine

RUN apk update && apk add git
#set working directory
#RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#copy all files from current directory to docker
COPY . .

RUN npm install

#start app
CMD ["npm", "start"]

EXPOSE 8080