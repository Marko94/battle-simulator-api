import * as express from 'express';
import postgreSQL from "../postgreSQL";
import Army, {AttackStrategy} from "../models/Army";

const router = express.Router();

//TODO pass army data from form
router.get( '/:battleId', (req, res) => {
	const pool = postgreSQL();
	// 	//Generate a random number of units and multiply by 2 because 1 unit equals 2 health
		const health = Math.floor(Math.random() * 40) * 2 + 160;
		const newArmy = {
			armyName: (Math.random() + 1).toString(36).substring(7),
			startingHealth: health,
			currentHealth: health,
			attackStrategy: AttackStrategy.RANDOM,
		} as Army;
		console.log(newArmy, req.params.battleId);
		const query = `UPDATE battles SET armies = jsonb_set(armies, ` + JSON.stringify(newArmy) + `) WHERE id = '${req.params.battleId}'`;
	console.log(query);
	return pool.query(query, (error, result) => {
			if (error) {
				res.status(500).json({success: false, message: 'error'});
				throw error;
			}
			console.log(result);
			return res.status(201)
				.json({
					success: true,
					message: 'success',
				});
		});
	});
// });

export default router;
