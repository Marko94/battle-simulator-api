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
const router = express.Router();
router.get('/:battleId', (req, res) => {
    const pool = (0, postgreSQL_1.default)();
    console.log("Battle ID: ", req.params.battleId);
    return pool.query('SELECT * FROM battles WHERE id = ' + req.params.battleId, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: 'error' });
            throw error;
        }
        console.log("Fetched battle " + req.params.battleId);
        console.log(result);
        return res.status(201).json({ success: true, message: 'success', body: result.rows });
    });
});
exports.default = router;
//# sourceMappingURL=fetchBattle.js.map