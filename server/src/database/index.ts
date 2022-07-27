import knex from 'knex';

module.exports = knex({
	client: 'postgres',
	connection: {
		host: 'localhost',
		user: 'postgres',
		password: 'senha',
		database: 'cinema',
		port: 5432
	}
});