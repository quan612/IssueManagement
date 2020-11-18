# Issue Management - FrontEnd

> This is a Jira clone front end site built with React, Apollo, Tailwind.

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
  - Drag and Drop

## Configuration File

In App folder > config.js, modify the endpoint, this is the endpoint of the backend server

```
export const devEndpoint = "http://localhost:5555/";
export const prodEndpoint = `https://jira-yoga-clone.herokuapp.com/`;
```

### Install packages

```
npm install
```

## Start

```console
npm run dev
```

## Test

Testing with Jest and enzyme (still need more tests, only covering a few tests)

## Screenshots

### Sign In (/signin)

![Screenshot](screenshots/signin.JPG)

### Sign Up (/signup)

![Screenshot](screenshots/signup.JPG)

### Reset Password Page (/reset)

![Screenshot](screenshots/resetpw.JPG)

### Projects Page (/projects)

![Screenshot](screenshots/projects-page.JPG)

### Listing Issues (/project/:projectId)

![Screenshot](screenshots/list-issue.JPG)

### Create Issue

![Screenshot](screenshots/create-issue.JPG)

### Edit Issue (/issues/:issueId)

![Screenshot](screenshots/edit-issue.JPG)
