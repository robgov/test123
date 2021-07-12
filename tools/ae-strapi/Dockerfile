FROM node: 12-alpine

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_ENV production

#create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install dependencies
COPY package.json /user/src/app/
COPY yarn.lock /user/src/app/
RUN yarn install

COPY . /user/src/app/

RUN yarn build
EXPOSE 1337

CMD ["yarn","start"]