FROM node:20 AS builder

WORKDIR /app

# copy package files and install deps
COPY package*.json ./
COPY mdb-angular-ui-kit-6.1.0.tgz ./
RUN npm install --legacy-peer-deps

# copy rest of project   -  حالا بقیه پروژه را کپی کن
COPY . .

# build production (npx ensures ng موجود باشه)
RUN npx ng build --configuration production

# ---------- Stage 2: serve with nginx ----------
FROM nginx:1.25-alpine

# remove default site files
RUN rm -rf /usr/share/nginx/html/*

# copy nginx config you made (نام فایل در کنار Dockerfile باشه: nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy build output from builder
COPY --from=builder /app/dist/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
