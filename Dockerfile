FROM node:latest

WORKDIR /app

RUN npm install -g pnpm

COPY package.json package-lock.json pnpm-lock.yaml ./

RUN pnpm install

COPY ./ ./

CMD ["pnpm", "run", "dev", "--host"]