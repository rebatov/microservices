FROM node:latest
COPY . /src
WORKDIR /src
RUN npm install --production
EXPOSE 9000
CMD npm start