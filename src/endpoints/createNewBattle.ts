import * as express from 'express';
import postgreSQL from "../postgreSQL";
import {BattleStatus} from "../models/Battle";

const newBattle = {
	status: BattleStatus.PREPARING,
};

const router = express.Router();

router.use( (req, res) => {
	const pool = postgreSQL();
	return pool.query('INSERT INTO battles (status) VALUES ($1)', [newBattle.status], (error, results) => {
		if (error) {
			throw error
		}
		console.log(results);
		return res.status(201).json({ success: true, message: 'ok' });
	});
});

export default router;
