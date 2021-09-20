# Stage 1 - the build process
FROM node:14.17.6 as build-deps
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /app/dist/portal-tenant /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]