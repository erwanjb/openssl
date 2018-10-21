const express = require("express");
const app = express();
const port = 80;
app.get('/', function(req, res){
	res.send("toto vaut:");
})

app.listen(port);