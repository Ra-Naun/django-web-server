FROM node:22.15.1-alpine

RUN apk add --update \
  python3 \
  build-base \
  gcc

WORKDIR /usr/src/web-site

HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=20 \
  CMD node ./healthcheck.js

CMD ["sh", "-c", "npm i && npm start"]
