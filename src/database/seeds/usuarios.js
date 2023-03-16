const userCreate = require("./utils/userCreate");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()

  let lista = [];
  for(let index = 1; index <= 20; index++) {
    let user = userCreate();
    user.id = index;

    lista.push(user);
  }

  await knex('usuarios').insert(lista);
};
