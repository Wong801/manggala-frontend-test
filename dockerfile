FROM node:16.13-alpine AS build

WORKDIR /usr/src/app

COPY . ./
RUN npm install
RUN npm run build

# remove dev dependencies
RUN npm prune --production

FROM alpine:3.15

WORKDIR /usr/src/app

# copy from build image
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/nuxt.config.js ./nuxt.config.js
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./

RUN apk add --update nodejs=16.14.2-r0 --no-cache
RUN apk add --update npm --no-cache

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]
