# Stage 1: Build Angular app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build -- --configuration production

# Development stage
FROM node:18 AS development

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies and Angular CLI globally
RUN npm install && npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

EXPOSE 4200

# Change to the directory containing angular.json
WORKDIR /app

# Use ng serve directly
CMD ["ng", "serve", "--project=oracle", "--host=0.0.0.0", "--disable-host-check", "--poll=2000"]

# Production serve stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from the previous stage
COPY --from=build /app/dist/oracle /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
