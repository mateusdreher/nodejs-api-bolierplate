#!/bin/bash
docker network create my-custom-network

docker-compose up --build -d

container_ip=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' node_api_bolierplate_user)

url="${container_ip}:3004/docs"

echo "The application is now running. You can access it by clicking the following link:"
echo "http://${url}"
