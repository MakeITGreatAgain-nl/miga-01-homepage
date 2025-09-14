FROM node:22 AS builder 

WORKDIR /usr/app

# Install app dependencies
COPY package.json .
# --mount=type=cache,target=/root/.npm 
RUN yarn

# build it
COPY . .
RUN yarn web-dist

FROM nginx:alpine
COPY --from=builder /usr/app/dist /usr/share/nginx/html

