import express from 'express';
import createNewBattle from './endpoints/createNewBattle';
import listBattles from "./endpoints/listBattles";
import cors from 'cors';
import bodyParser from "body-parser";
import fetchBattle from "./endpoints/fetchBattle";
import addArmyToBattle from "./endpoints/addArmyToBattle";

const app = express();
const port = 8080;
app.use(cors());
//This is ok because we don't have authentication, otherwise we would specify the path
app.options('*', cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/createNewBattle', createNewBattle);
app.use('/listBattles', listBattles);
app.use('/fetchBattle', fetchBattle);
app.use('/addArmyToBattle', addArmyToBattle);

app.get('/', (req, res) => {
  res.status(404);
  res.send({ message: 'Requested resource does not exist.' });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
