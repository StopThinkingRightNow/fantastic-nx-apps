
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/apps/rs-client .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]