FROM alpine

RUN apk add --update nodejs nodejs-npm

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

ENTRYPOINT [ "node",  "app.js" ]
CMD [ "15" ]