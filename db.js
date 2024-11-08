const pgp = require('pg-promise')();
const db = pgp({
  host: 'aws-0-us-east-1.pooler.supabase.com',
  database: 'postgres',
  port: '6543',
  user: 'postgres.fuajezjhwmbelhcbpzag',
  password: 'kYzpPIwK6rZzHwBl'
});

module.exports = {
  db,
};
