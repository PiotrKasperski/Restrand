## Stage 1:build
#FROM node:alpine AS development
#
#WORKDIR  /usr/frontend/src/app
#
#COPY package*.json ./
#
#RUN npm install
#RUN npm install -g @angular/cli@12.2.2
#
#COPY . .
#
#RUN npm run build
#
#EXPOSE 4200

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest
#copy proxy conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/app-restrand-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 4200
