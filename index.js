const express = require('express');
const compression = require('compression');
const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');

const https_credentials = {
  key: fs.readFileSync('./https/sofive.com2018.key', 'utf8'),
  cert: fs.readFileSync('./https/sofive.com2018.crt', 'utf8')
}

app.use(express.static('public', { maxAge: 86400000 }));
app.use(compression());

app.use(function(req, res, next) {
	if (!req.get('Host')) {
		return res.status(500).json(false);
	}
	if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
		res.redirect('https://app.sofive.com' + req.url);
	}
	else
		next();
});

app.use('/', express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(https_credentials, app);

httpServer.listen(80, () => console.log('Http server up!'));
httpsServer.listen(443, () => console.log('Https server up!'));