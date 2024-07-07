const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const ytdl = require("ytdl-core");
const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/example", (req, res) => {
	res.send(`URl is: ${req.body.ytURL}.`);
	ytdl(req.body.ytURL).pipe(fs.createWriteStream("video.mp4"));
});

app.listen(port, () => {
	console.log(`Server running on port${port}`);
});
