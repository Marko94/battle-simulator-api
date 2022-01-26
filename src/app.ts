import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(404);
  res.send({ message: 'Requested resource does not exist.' });
});