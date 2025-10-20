# syntax=docker/dockerfile:1.7
ARG NODE_VERSION=24.6.0
FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/root/.pnpm-store pnpm i --frozen-lockfile
COPY . .
RUN pnpm build
RUN [ -d dist ] || ln -s build dist

FROM nginx:1.27-alpine
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/
COPY nginx.conf.template /etc/nginx/conf.d/app.conf.template
ENV BACKEND_HOST=backend BACKEND_PORT=8080
CMD /bin/sh -c "envsubst '\$BACKEND_HOST \$BACKEND_PORT' \
  < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf && \
  nginx -g 'daemon off;'"
