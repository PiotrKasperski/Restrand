# Stage 1:build
FROM node:latest AS development

WORKDIR  /usr/frontend/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@12.2.2

COPY . .

RUN npm run build

EXPOSE 4200
