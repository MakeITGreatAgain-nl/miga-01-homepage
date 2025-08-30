FROM node:20.18.3 AS builder 


WORKDIR /usr/app
COPY ./ ./

RUN npm install && \
    npm run web-dist

FROM nginx:alpine
COPY --from=builder /usr/app/dist /usr/share/nginx/html

