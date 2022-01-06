FROM node:14.18.0-slim As build

WORKDIR /home/app

#Copy package.json
COPY package.json package-lock.json ./

#Install dependencies
RUN npm install

#Copy other files and folder to working directory
COPY . .

#Build Angular application in PROD mode
RUN npm run build

#Download NGINX Image
FROM nginx:1.15.8-alpine

#Copy built angular files to NGINX HTML folder
COPY --from=build /home/app/dist/dev-ng-build/ /usr/share/nginx/html