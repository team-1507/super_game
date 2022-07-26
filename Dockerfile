FROM node:16
WORKDIR /var/www


COPY ./package.json package.json
RUN npm i
COPY . .

RUN ["npm", "run", "build"]

EXPOSE 4751
CMD ["npm", "run", "serve"]
