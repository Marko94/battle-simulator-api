"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const postgreSQL_1 = __importDefault(require("../postgreSQL"));
const Army_1 = require("../models/Army");
const router = express.Router();
router.get('/:battleId', (req, res) => {
    const pool = (0, postgreSQL_1.default)();
    // return pool.query('SELECT armies FROM battles WHERE id = ' + req.params.battleId, async (error, result) => {
    // 	if (error) {
    // 		res.status(500).json({success: false, message: 'error'});
    // 		throw error;
    // 	}
    // 	console.log("Fetched battle " + req.params.battleId);
    // 	const prevArmies = result.rows && result.rows.length > 0 && result.rows[0].armies;
    // 	console.log("Prev armies: " + prevArmies);
    // 	//Generate a random number of units and multiply by 2 because 1 unit equals 2 health
    const health = Math.floor(Math.random() * 40) * 2 + 160;
    // 	const updatedArmies = ((Array.isArray(prevArmies) && prevArmies) || []).concat({
    // 		armyName: (Math.random() + 1).toString(36).substring(7),
    // 		startingHealth: health,
    // 		currentHealth: health,
    // 		attackStrategy: AttackStrategy.RANDOM,
    // 	} as Army)
    // 	console.log(updatedArmies);
    const newArmy = {
        armyName: (Math.random() + 1).toString(36).substring(7),
        startingHealth: health,
        currentHealth: health,
        attackStrategy: Army_1.AttackStrategy.RANDOM,
    };
    console.log(newArmy, req.params.battleId);
    const query = `UPDATE battles SET armies = jsonb_set(armies, ` + JSON.stringify(newArmy) + `) WHERE id = '${req.params.battleId}'`;
    console.log(query);
    return pool.query(query, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: 'error' });
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
exports.default = router;
//# sourceMappingURL=addArmyToBattle.js.map