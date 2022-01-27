import * as express from 'express';
import postgreSQL from "../postgreSQL";

const router = express.Router();

router.use( (req, res) => {
	const pool = postgreSQL();
	// we can also add pagination here, e.g. limit to n results so we don't fetch
	return pool.query('SELECT * FROM battles ORDER BY id ASC', (error, results) => {
		if (error) {
			res.status(500).json({ success: false, message: 'error' });
			throw error
		}
		console.log("Fetched battles");
		console.log(results);
		return res.status(201).json({ success: true, message: 'ok', body:results.rows });
	});
});

export default router;
