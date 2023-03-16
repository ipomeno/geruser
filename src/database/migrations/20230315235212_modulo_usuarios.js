/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('usuarios', (table) => {
      table.bigInteger('id');
      table.string('nome', 100).notNullable();
      table.string('email', 200).notNullable();
      table.string('senha', 200).notNullable();
      table.string('cpf', 30);
      table.string('telefone', 30);
      table.boolean('ativo').defaultTo(false);
      table.datetime('cadastro').notNullable();
      table.datetime('alteracao').notNullable();

      table.primary('id', 'pk_usuarios');
    })
    .createTable('usuarios_audit', (table) => {
      table.bigInteger('id').unsigned();
      table.dateTime('cadastro').notNullable();
      table.json('new_data');
      table.json('old_data');
      table.string('tipo', 10).notNullable();
      table.string('usuario', 100).notNullable();
      table.bigInteger('usuario_id')
        .unsigned()
        .notNullable();

      table.string('ip', 200).notNullable();
      table.string('url', 1000);
      table.string('user_agent', 500).notNullable();
      table.primary('id', 'pk_usuarios_audit');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('usuarios')
    .dropTable('usuarios_audit');
};
