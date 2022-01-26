import * as express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  // if (req.hostname === 'localhost') {
  //   next();
  //   return;
  // }
  res.send('Created new battle!');
  console.log("Created new battle!");

});

export default router;