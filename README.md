Docker-Node-Mongo


install express and nodemon

docker build -t my-app/express-api:latest-dev . : cmd to build docker image 

docker images : cmd to check docker images 

docker run my-app/express-api:latest-dev : cmd to run docker image 

docker run --name dev-test my-app/express-api:latest-dev : cmd to name the container 

docker ps : cmd to check running images 

docker stop <container id or name> : cmd to stop the container

docker ps -a : cmd to cehck all images ran