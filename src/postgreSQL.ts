import { Pool } from 'pg';

const createTcpPool = () => {
	// Establish a connection to the database
	return new Pool({
		user: 'postgres-battle',
		host: 'localhost',
		password: 'lozinka123',
		database: "battleDB",
		port: 5432,
	}) as Pool;
};

export default () => {
	return createTcpPool();
};
