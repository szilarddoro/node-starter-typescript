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
yarn start
```

This will run _ts-node_, which transpiles all your available TypeScript files and also allows the application to restart itself when a crash happens at some point during the runtime.

### Sample request
If you managed to start the application, then it should be available on port 8080.

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
