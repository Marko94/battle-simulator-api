import express from 'express';
import createNewBattle from "./endpoints/createNewBattle";

const app = express();
const port = 8080;

app.use('/createNewBattle', createNewBattle);

app.get('/', (req, res) => {
    res.status(404);
    res.send({ message: 'Requested resource does not exist.' });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
