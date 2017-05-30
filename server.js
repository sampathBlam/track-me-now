var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({
}));

app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
