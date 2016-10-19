var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
   var filename = process.argv[3];
   fs.readFile(filename, function(err, data) {
   if (err) return res.sendStatus(500);
    try {
        var books = JSON.parse(data);
    } catch (err) {
        res.sendStatus(500);
   }
   res.send(JSON.stringify(JSON.parse(data.toString())));
   });
});

app.listen(process.argv[2]);