# Stage 1: Use yarn to build the app
FROM node:12-alpine as builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2: Copy the JS React SPA into the Nginx HTML directory
FROM bitnami/nginx:latest
COPY --from=builder /usr/src/app/build /app
EXPOSE 3030
CMD ["nginx", "-g", "daemon off;"]