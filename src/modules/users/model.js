
const whereBuilder = (db, data) => { 
  return db;
};

module.exports = {
  async insert({data, audit}, db) {
    await db('usuarios').insert(data);
    await db('usuarios_audit').insert(audit);
  },

  async update({data, audit}, db) {
    await db('usuarios')
      .where('id', data.id)
      .update(data);

    await db('usuarios_audit').insert(audit);
  },

  async delete({data, audit}, db) {
    await db('usuarios')
      .where('id', data.id)
      .del();

    await db('usuarios_audit').insert(audit);
  },

  async count(data, db) {
    let result = await whereBuilder(db('usuarios'), data) 
      .count('usuarios.id', {as: 'counter'});

    return result[0].counter;
  },

  async findById(data, db) {
    return await db('usuarios')
      .where('id', data.id)
      .first();
  },

  async list(data, db) {
    let { filter, offset, limit } = data;
    return await whereBuilder(db('usuarios'), filter)
      .select()
      .orderBy('usuarios.nome')
      .offset(offset)
      .limit(limit);
  },

  async login({email, senha}, db) {
    let result = db('usuarios')
      .where('usuarios.email', email)
      .where('usuarios.senha', senha)
      .first();

    if (!result) {
      throw new Error('Invalid user');
    }

    return result;
  }
}