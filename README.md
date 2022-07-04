## Voting App

Multi Container App for academic challenge.

The challenge implements a microservice voting app with 3 services **Client**, **API server** & **Mongodb Service**

## Scope of the challenge

The challenge is to cover the tools

- Docker
- Docker Compose
- Nginx
- API development with Nodejs
- Client development with React # Vite
- API documentation # Swaggify


## Running the app with docker compose

Docker compose will build and start all containers & and allow them to communicate

```sh 
$ docker-compose up
```

## Client 

The client service is implemented with React Vite

Running the client service container as an independent container

**Building the image**

```sh
$ docker build . -t <docker-id>/<preferred-image-name> -f Dockerfile.dev
# docker build . -t patrickniyo/voting-app-client -f Dockerfile.dev
```

**Running the container**
```sh
$ docker run -p <host-port>:<exposed-container-port> <image-name>
# docker run 3000:3000 patrickniyo/voting-app-client
```

Running the development server

```sh
$ yarn dev
# npm run dev
```

## Server

The server is built with Nodejs and Express

Running the server container as an independent container

**Building the image**

```sh
$ docker build . -t <docker-id>/<preferred-image-name> -f Dockerfile.dev
# docker build . -t patrickniyo/voting-app-server -f Dockerfile.dev
```

**Running the container**
```sh
$ docker run -p <host-port>:<exposed-container-port> <image-name>
# docker run 5000:5000 patrickniyo/voting-app-server
```

Running the dev server

```sh
$ yarn start:dev
```

## Nginx

The nginx is used to set up a proxy server to benefit from some of it's features like [Load Balancing](https://www.nginx.com/resources/glossary/load-balancing/) .


![Image](https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/194520/image-1582751182464-4b9d62e62912bd777a7c647a8309df8b.png)

Our **nginx** service is listening on port **80**  of the host machine.

Our **nginx** server is accessible by **http://localhost** or **http://localhost:80**

The default requests like **http://localhost** are forwarded to the client service

It will be forwarding **http://localhost:3000** requests to the client service and **http://localhost:5000** to the backend api service

## API Documentations

Thanks to [@divinirakiza](https://github.com/divinirakiza) for a super tool to automate the API documentation with swagger.

The tool is [Swaggiffy](https://www.npmjs.com/package/swaggiffy). Get it from [npm](https://www.npmjs.com/package/swaggiffy)

[Swaggiffy](https://www.npmjs.com/package/swaggiffy) is a zero config opensource tool for documenting your Node.js Express APIs and is built on top of Swagger. It is designed to be easy to use and simple, with the goal that anyone can read it.

Accessing the documentation

[http://localhost:5000/api-docs](http://localhost:5000/api-docs)
## Author

[Patrick Niyogitare](https://patrickniyo.com)
