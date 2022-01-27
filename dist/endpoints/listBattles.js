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
router.use((req, res) => {
    const pool = (0, postgreSQL_1.default)();
    // we can also add pagination here, e.g. limit to n results so we don't fetch
    return pool.query('SELECT * FROM battles ORDER BY id ASC', (error, results) => {
        if (error) {
            res.status(500).json({ success: false, message: 'error' });
            throw error;
        }
        console.log("Fetched battles");
        console.log(results);
        return res.status(201).json({ success: true, message: 'ok', body: results.rows });
    });
});
exports.default = router;
//# sourceMappingURL=listBattles.js.map