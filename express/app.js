var express = require('express')
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/index/index', function (req, res) {
  res.send('Hello World')
})
console.log('port', 8360)
app.listen(8360)