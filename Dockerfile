# setup source image
FROM node

# setup working directory for container
WORKDIR /hello-ci-workflow

# copy the root directory of project into container
ADD . /hello-ci-workflow

# install npm package
RUN npm install

# open the port of container
EXPOSE 8080

# run
CMD npm start
