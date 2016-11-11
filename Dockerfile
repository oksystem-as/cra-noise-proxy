FROM mhart/alpine-node:6.7.0

RUN mkdir -p /usr/src/cra-noise-proxy
WORKDIR /usr/src/cra-noise-proxy

RUN ls -l
COPY ./ /usr/src/cra-noise-proxy
RUN rm Dockerfile
RUN ls -l

RUN npm install --production

EXPOSE 8080
CMD [ "npm", "start" ]