"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const createTcpPool = () => {
    // Establish a connection to the database
    return new pg_1.Pool({
        user: 'postgres-battle',
        host: 'localhost',
        password: 'lozinka123',
        database: "battleDB",
        port: 5432,
    });
};
exports.default = () => {
    return createTcpPool();
};
//# sourceMappingURL=postgreSQL.js.map