FROM node:12.17.0
WORKDIR /aedigital
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm run start