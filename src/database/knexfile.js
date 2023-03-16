module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'dbgeruser',
      user: 'root',
      password: 'root',
      supportBigNumbers: true,
    },

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations/`,
    },

    seeds: {
      directory: `${__dirname}/seeds/`
    }
  }
};
