# Angular, Docker and Microservices

To run the project (development mode):

1. Install Docker CE for Mac or Windows (http://docker.com)

1. Install Angular CLI: `npm install @angular/cli -g`

1. Run `npm install` at the root of the projet

1. Run `npm install` in ./microservices/node

1. Run `ng build`

1. Run `docker-compose build`

1. Run `docker-compose up`

1. Navigate to http://localhost

## Running ng build causes nginx container to 404

When you run ng build it is re-creating the dist folder which
then breaks your volume if doing something like:

docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine

It's OK to update the content but NOT blow away the folder
due to the volume that's created above.