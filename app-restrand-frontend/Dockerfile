# Stage 1:build
FROM node:latest AS development

WORKDIR  /usr/frontend/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@12.2.2

COPY . .

RUN node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng build

EXPOSE 4200
