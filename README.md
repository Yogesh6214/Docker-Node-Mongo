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

docker compose up : cmd for docker compose to start the docker project