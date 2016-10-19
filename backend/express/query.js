var express = require('express');
var app = express();

app.get('/search', function(req, res) {
    var query = req.query;
    delete query.__proto__;
    res.send(JSON.stringify(query));
});

app.listen(process.argv[2]);