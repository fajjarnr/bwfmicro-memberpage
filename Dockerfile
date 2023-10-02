#Build Steps
FROM node:18.18-buster as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm ci
COPY . /app

RUN npm run build

#Run Steps
FROM nginx:1.19.8-alpine  
COPY --from=build-step /app/build /usr/share/nginx/html