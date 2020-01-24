require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");

const server = createServer();

// use express middleware to handle jwt

// decode jwt to get the user id
// server.express.use((req, res, next) => {
//   const { token } = req.cookies;
//   if (token) {
//     const { userId } = jwt.verify(token, process.env.APP_SECRET);
//     // put the iser id onto the req
//     req.userId = userId;
//   }
//   next();
// });

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on http://localhost:${deets.port}`);
  }
);
