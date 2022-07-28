require("dotenv").config();
const server = require("./src/app");

server.listen(process.env.PORT || 3001, () =>
  console.log(`server listening at ${process.env.PORT || 3001}`)
);
