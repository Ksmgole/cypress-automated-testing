FROM cypress/base:10

WORKDIR app

ADD . /app

RUN yarn

RUN npm install -g cypress --unsafe-perm --silent

RUN cypress verify

CMD ["npm","run","cypress"]
