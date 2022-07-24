FROM node:16
WORKDIR /home/anastasiia/Desktop/project/super_game


COPY ./package.json package.json
RUN npm i
COPY . .

RUN ["npm", "run", "build"]

EXPOSE 4751
CMD ["npm", "run", "start"]
