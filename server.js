const path = require('path');
const express = require('express');
const favicon = require('express-favicon');

const app = express();
const port = process.env.PORT || 3000;
const buildPath = path.join(__dirname, '.', 'build');

app.use(express.static(buildPath));
app.use(favicon(path.join(buildPath, 'favicon.ico')));

app.get('/ping', function(_req, res) {
  return res.send('pong');
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Frontend available at port ${port}!`);
});
