# syntax=docker/dockerfile:1.4

ARG NODE_VERSION=18.10.0

# Create image based on the official Node image from dockerhub
FROM node:${NODE_VERSION}-alpine as based

# Create app directory
WORKDIR /app

# Copy dependency definitions
COPY ./package.json /app
COPY ./package-lock.json /app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY ./ /app

# Serve the app
RUN npm run build


# Run Phase
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=based /app/build /usr/share/nginx/html