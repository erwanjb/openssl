const express = require("express");
const app = express();
const port = 8080;
app.get('/', function(req, res){
	res.send("toto vaut:");
})

app.listen(port);