FROM node:22 AS builder 

RUN npm install -g npm@11.6.0 

WORKDIR /usr/app

# Install app dependencies
COPY package.json .
# --mount=type=cache,target=/root/.npm 
RUN npm i

# build it
COPY . .
RUN npm run web-dist

FROM nginx:alpine
COPY --from=builder /usr/app/dist /usr/share/nginx/html

