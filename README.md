# Node.js default starter

Kick off your project with this default boilerplate. This starter ships with Node.js and TypeScript with some additional tools you might need during the development process.

### Install & Start
We recommend _yarn_ to be used as the standard package manager for this project.

Install required packages:
```
yarn install
```

Start the project:
```
yarn start:dev
```

This will run _ts-node_, which transpiles all your available TypeScript files and also allows the application to restart itself when a crash happens at some point during the runtime.

### Docker Compose
The project can be started via docker-compose by default. The only prerequisites for this are Docker and Docker Compose installed on your machine.

Install and run the project in a containerized way by using the following command:
```
docker-compose up -d
```

If you'd like to change anything in the original Dockerfile, feel free to extend it. You'll need to rebuild the previous image and run the new one by using the following commands:
```
docker-compose build && docker-compose up -d
```
If you managed to start the application either by using `yarn start:dev` or `docker-compose`, it should be available on port **8080**.

### Sample request

Request:
```
GET http://localhost:8080/api/sample-data
```

Response:
```
[
  {
    "id": 1,
    "title": "Sample Data #1",
    "description": "Lorem ipsum dolor sit amet"
  },
  {
    "id": 2,
    "title": "Sample Data #2",
    "description": "Lorem ipsum dolor sit amet"
  },
  ...
]
```

Request:
```
GET http://localhost:8080/api/sample-data/2
```

Response:
```
{
  "id": 2,
  "title": "Sample Data #2",
  "description": "Lorem ipsum dolor sit amet"
}
```
