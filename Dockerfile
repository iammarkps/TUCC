FROM mhart/alpine-node:latest AS build
WORKDIR /app
COPY . .
RUN apk add --no-cache make gcc g++ python
RUN yarn && yarn build

FROM mhart/alpine-node:base 
WORKDIR /app
COPY --from=build /app .
COPY . .
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]