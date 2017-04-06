
FROM node:7.4.0-onbuild

RUN npm install -g nodemon

RUN gzip -d oc.gz && mv oc /usr/local/bin/

EXPOSE 8888

USER 1001
