const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
//var cors = require("cors");

const server = createServer();

// use express middleware to handle jwt
server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  //res.header("Access-Control-Allow-Credentials", true);
  console.log(token);
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the user id onto the req
    req.userId = userId;
  }
  next();
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

// decode jwt to get the user id
/**
 * The idea is: there is a token being set as cookie in the browser once the user logged in or sign up successfully
 * then this token is passed along in the req (request) from the client side.
 *
 * Express acts as a middle to check for this request if is has a token or the token is null. If there is, then
 * the userId ~ real id of the user is assigned to this request and be forward in next(),
 *
 * In mutation or query resolver, the userId is in ctx.request
 *
 * In client side, we could make the CURRENT_USER_QUERY as a wrapper component to check for "me" obj being returned
 * If yes then we render authenticated root, if not then redirect to sign in page
 */
