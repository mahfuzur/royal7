const express = require('express');

const app = express();

app.use(express.static('./dist/royal7'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/royal7/' }),
);

app.listen(process.env.PORT || 8080);