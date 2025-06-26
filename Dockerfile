# Tahap 1: Build
FROM node:20-alpine AS builder

WORKDIR /

COPY package*.json ./
RUN yarn install

COPY . .

# Build aplikasi NestJS
RUN yarn run build

# Jika pakai Prisma, jalankan generate
RUN npx prisma generate

# Tahap 2: Jalankan aplikasi
FROM node:20-alpine AS runner

WORKDIR /

# Salin dependency yang sudah diinstall
COPY --from=builder /app/node_modules ./node_modules

# Salin hasil build
COPY --from=builder /app/dist ./dist

# Salin file prisma (kalau pakai)
COPY --from=builder /app/prisma ./prisma

# Salin file package.json (untuk info project)
COPY --from=builder /app/package*.json ./

# Expose port yang digunakan NestJS
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "dist/main"]
