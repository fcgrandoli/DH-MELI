const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 8443, () => console.log('Server runnning'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.use('/public', express.static(__dirname + '/public'));
