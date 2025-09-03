FROM node:20.18.3 AS builder 


WORKDIR /usr/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN npm install 

# build it
COPY . .
RUN npm run web-dist

FROM nginx:alpine
COPY --from=builder /usr/app/dist /usr/share/nginx/html

