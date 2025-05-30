const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  database: 'postgres',
  port: 5433,
});

client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};
