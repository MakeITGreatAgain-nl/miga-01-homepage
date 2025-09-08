FROM node:22 AS builder 


WORKDIR /usr/app

# Install app dependencies
COPY package.json .
RUN npm i

# build it
COPY . .
RUN npm run web-dist

FROM nginx:alpine
COPY --from=builder /usr/app/dist /usr/share/nginx/html

