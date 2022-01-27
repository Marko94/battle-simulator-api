"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createNewBattle_1 = __importDefault(require("./endpoints/createNewBattle"));
const listBattles_1 = __importDefault(require("./endpoints/listBattles"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
//This is ok because we don't have authentication, otherwise we would specify the path
app.options('*', (0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use('/createNewBattle', createNewBattle_1.default);
app.use('/listBattles', listBattles_1.default);
app.get('/', (req, res) => {
    res.status(404);
    res.send({ message: 'Requested resource does not exist.' });
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
//# sourceMappingURL=index.js.map