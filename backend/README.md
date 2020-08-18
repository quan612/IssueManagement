# Issue Management - Back End

> This is a Jira clone built with nodejs, expressjs, graphQL and prisma.

## Features

> CRUD (Create, Read, Update And Delete)

- Authentication with JWT
  - Login 
  - Register
  - Reset Password
- Project (CRUD)
  - CRUD projects
  - Paginated query
  - Notifications
- Issue within project
  - CRUD issues
  - Tracking management
  - CRUD comments within issue

## Configuration File

In prisma.yml, modify the endpoint below to use local endpoint or any external endpoint.
The endpoint is configured based on .env

```ENV
FRONTEND_URL="the front-end url"
PRISMA_SECRET="any secret"
PRISMA_ENDPOINT="your end point"
APP_SECRET="any secret"
PORT=any port
```

## Installation

Install all npm dependecies

```console
npm install
```

Install nodemon globally

```console
npm install -g nodemon
```


## Start backend

```console
node start
```
This will start up an instance of prisma endpoint locally if you have it configured to run it locally
By default it is accessible at http://localhost:5555/

## Todo
- Need more testing
- Need a way to show current database models
- Integrate with 3rd party email
- Missing GraphQL Subscriptions, so the changes are not updating on real-time
