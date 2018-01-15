const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');
const path = require('path');
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

const server = http.createServer(app);
server.listen(3000, () => console.log(`Listening on port ${server.address().port}`));
