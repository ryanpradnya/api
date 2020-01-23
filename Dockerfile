FROM node:lts-alpine3.11 AS base
WORKDIR /usr/src/app

COPY ["nest-cli.json","package.json","tsconfig.build.json","tsconfig.json","tslint.json","yarn.lock","./src/"]

#==== Dependencies ====
FROM base AS dependencies
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN ls

RUN yarn build

#==== Release ====
FROM base AS release

COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY dist ./dist

RUN ls

EXPOSE 3000

RUN ls

CMD ["node", "dist/main.js"]

