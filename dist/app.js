"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createNewBattle_1 = __importDefault(require("./endpoints/createNewBattle"));
const app = (0, express_1.default)();
app.use('/createNewBattle', createNewBattle_1.default);
app.get('/', (req, res) => {
    res.status(404);
    res.send({ message: 'Requested resource does not exist.' });
});
//# sourceMappingURL=app.js.map