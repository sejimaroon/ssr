const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/*
import express from 'express';
import App from './views/App';

const app = express();

app.listen(9000);

app.use(express.static('assets'));

app.get('/', (_, res) => {
  const response = App();
  res.send(response);
});
*/