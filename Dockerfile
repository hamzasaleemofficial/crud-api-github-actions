#Mutistage Backend Docker files

# Stage 1: Install dependencies
FROM node:24-alpine AS builder

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

# Stage 2: Production image
FROM node:24-alpine

WORKDIR /backend

# Update npm to latest version
RUN npm install -g npm@latest

# Copy only required files
COPY --from=builder /backend ./

#Remove dev dependencies
RUN npm prune --omit=dev

EXPOSE 3000

CMD ["npm", "start"]