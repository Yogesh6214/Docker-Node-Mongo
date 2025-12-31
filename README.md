Docker-Node-Mongo

install express and nodemon

docker build -t my-app/express-api:latest-dev . : cmd to build docker image

docker images : cmd to check docker images

docker run my-app/express-api:latest-dev : cmd to run docker image

docker run --name dev-test my-app/express-api:latest-dev : cmd to name the container

docker ps : cmd to check running images

docker stop <container id or name> : cmd to stop the container

docker ps -a : cmd to cehck all images ran

docker container prune : cmd to delete all stoped containers

docker image prune : cmd to delete all stoped images

docker network ls : cmd to check docker networks running locally

docker network inspect bridge : cmd to get info about bridge network

---

docker-compose build : Build or rebuild services specified in the docekr.compose.yam file

docker-compose build -no-cahe : build the services without using cache

docker-compose up : cmd to start all the services defined in the docker-compose.yaml file in the foreground.

docker-compose up -d : cmd to start all services in the background(deatched mode)

docker-compose stop : stop all services without removing them

docker-compose down : stop all and remove container and networks created by up.

docker-compose ps : list all running container related to services

docker-compose logs : view combined logs from all services

docker-compose logs [service_name] : view logs for specific service
