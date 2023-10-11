
# This image only use for production environment setup
# Build Phase
FROM node:18-alpine as builder

WORKDIR '/app'

COPY ./project.json ./
RUN npm install
COPY ./ ./
RUN npm run build


# Run Phase
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html