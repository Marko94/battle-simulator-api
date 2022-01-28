import * as express from 'express';
import postgreSQL from "../postgreSQL";

const router = express.Router();

router.get( '/:battleId', (req, res) => {
	const pool = postgreSQL();
	console.log("Battle ID: ", req.params.battleId)
	return pool.query('SELECT * FROM battles WHERE id = ' + req.params.battleId, (error, result) => {
		if (error) {
			res.status(500).json({ success: false, message: 'error' });
			throw error
		}
		console.log("Fetched battle " + req.params.battleId);
		console.log(result);
		return res.status(201).json({ success: true, message: 'success', body: result.rows });
	});
});

export default router;
