import express from 'express';
import createNewBattle from "./endpoints/createNewBattle";

const app = express();

app.use('/createNewBattle', createNewBattle);

app.get('/', (req, res) => {
  res.status(404);
  res.send({ message: 'Requested resource does not exist.' });
});