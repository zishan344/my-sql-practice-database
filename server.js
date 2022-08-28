const http = require("http");
const app = require("./index");
const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
