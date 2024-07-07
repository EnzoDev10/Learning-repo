/* When importing modules that are not inside one of your files 
it's not necessary to use a path 
*/
import http from "http";
const PORT = "8800";

// Req = request from the frontend,
// res = response from the server
const server = http.createServer((req, res) => {
	// Header that makes the response an html file
	/* res.setHeader("Content-Type", "text/html");
	res.statusCode = 404;
     */
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end("<h1>Hello World!</h1>");
});

server.listen(8800, () => {
	console.log(`Server running on port ${PORT}`);
});
