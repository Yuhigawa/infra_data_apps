FROM node:16.14-slim

WORKDIR /home/infra_data_app/backend
COPY . .

RUN apt-get update && \
    yarn install && \
    yarn

EXPOSE 3000
CMD [ "yarn", "start:dev" ]