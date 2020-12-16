# 15.3.0-alpine3.10, 15.3-alpine3.10, 15-alpine3.10, alpine3.10, current-alpine3.10
# 15.3.0-alpine3.11
# Stage 1

FROM node:14.7.0-alpine as build-step

#RUN mkdir -p /app

WORKDIR /DevDir
COPY package.json  ./
COPY ng-uikit-pro-standard-10.1.1.tgz ./
RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=build-step /DevDir/dist/GeneralTranscriptFront/  /usr/share/nginx/html