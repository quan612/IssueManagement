const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const express = require("express");
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");

const server = createServer();

// use express middleware to handle jwt
server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

const buildPath = path.join(__dirname, "..", "build");
server.express.use(express.static(buildPath));

server.express.get("*", (req, res) => {
  res.sendFile(path.resolve(buildPath, "index.html"));
});

server.start(
  {
    cors: {
      credentials: true,
      origin: [
        `http://localhost:5555`,
        `http://localhost:5554`,
        `http://localhost:3000`,
        `*`,
        `http://jira-client-prod.herokuapp.com`,
        `https://jira-client-prod.herokuapp.com`,
        `http://192.168.0.11:5554`,
        `https://192.168.0.11:5554`,
      ],
    },
  },
  (deets) => {
    console.log(`Server is now running on http://localhost:${deets.port}`);
  }
);
