const express = require('express');
const compression = require('compression');
const app = express();
const https = require('https');
const fs = require('fs');

app.use(express.static('public', { maxAge: 86400000 }));
app.use(compression());

app.use('/', express.static('public'));

const port = process.env.PORT || 80

https.createServer({
  key: fs.readFileSync('./https/sofive.com2018.key'),
  cert: fs.readFileSync('./https/sofive.com2018.crt')
}, app).listen(port, () => console.log('Website server listening on port '+port+'!'))