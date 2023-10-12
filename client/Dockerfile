
# This image only use for production environment setup
# Build Phase
FROM node:18 as builder

WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build


# Run Phase
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html