const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const consolidate = require('consolidate');

const app = express();

app.use(cookieParser());

app.engine('html', consolidate.ejs);
app.engine('js', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public'), { maxage: '14d' }));

app.use('/', (req, res) => {
  res.render('../public/index.html');
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${server.address().port}`));

//db config
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds125388.mlab.com:25388/pisop-feliks');
