const express = require('express');
const compression = require('compression');
const app = express();

app.use(express.static('public', { maxAge: 86400000 }));
app.use(compression());

app.use('/', express.static('public'));

const port = process.env.PORT || 80

app.listen(port, () => console.log('Website server listening on port '+port+'!'))