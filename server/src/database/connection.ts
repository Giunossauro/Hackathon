import knex from 'knex';
import dotenv from 'dotenv';
import process from 'process';
dotenv.config();

export default knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT)
  }
}); 