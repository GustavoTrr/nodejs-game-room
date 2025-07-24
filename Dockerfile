FROM node:24.4-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

########################
####  Second Stage  ####
########################

FROM node:24.4-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

COPY package*.json ./

EXPOSE 3000

CMD ["node", "dist/server.js"]
