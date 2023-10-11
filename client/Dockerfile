
# This image only use for production environment setup
# Build Phase
FROM node:18

WORKDIR /usr/src/app

COPY project.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "build"]


