FROM node:14.15.4

LABEL MANTAINER="Luis Hernandez, Jorge Alvarez, Erick Soto"

EXPOSE 4200

WORKDIR /app

ADD package.json /app/

RUN npm install

ADD . /app/

CMD ["node", "server"]
