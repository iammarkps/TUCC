FROM mhart/alpine-node:latest AS build
RUN apk add --no-cache make gcc g++ python
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM mhart/alpine-node:base 
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]