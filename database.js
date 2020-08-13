var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Ruth130178',
      database : 'knex_node'
    }
  });

  module.exports = knex;