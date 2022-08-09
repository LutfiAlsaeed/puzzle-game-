const express = require('express');
const app = express();
const path=require('path')
app.listen(3000, function() {
    console.log('listening on 3000')
  })
  app.use(express.static('public'))

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))

  })
  