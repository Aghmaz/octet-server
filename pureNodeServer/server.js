const http = require("http"); //built in function , in node , hyper text transfor protocol
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const filePath = path.join(__dirname, "index.html");
    console.log(filePath, "filePath");

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Internal server Error");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("server is running on : 8000");
});

// localhost:8000/
// localhost:8000/hello
// localhost:8000/index.html
