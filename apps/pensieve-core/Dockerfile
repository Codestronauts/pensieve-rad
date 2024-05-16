FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND yarn.lock are copied
COPY yarn.lock ./
COPY package.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn

COPY . .

RUN npx prisma generate

RUN yarn build

FROM node:16

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
