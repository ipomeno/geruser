const db = require('../../database/db');
const auditUtil = require('../../libs/auditUtil');
const dateUtil = require("../../libs/dateUtil");
const numberUtil = require('../../libs/numberUtil');
const { baseListService } = require('../util/baseListService');
const model = require('./model');

module.exports = {
  async insert(data, user) {
    data.id = numberUtil.createId();
    data.cadastro = dateUtil.dateTimeNow();
    data.alteracao = dateUtil.dateTimeNow();

    let audit = auditUtil.createDataAudit(user);
    audit.new_data = JSON.stringify(data);
    audit.tipo = 'ins';

    return await db.transaction(async (trans) => {
      return await model.insert({data, audit}, trans);
    });
  },

  async update(data, user) {
    data.cadastro = dateUtil.parseDateSQL(data.cadastro);
    data.alteracao = dateUtil.dateTimeNow();

    let old = await model.findById(data, db);

    let audit = auditUtil.createDataAudit(user);
    audit.new_data = JSON.stringify(data);
    audit.old_data = JSON.stringify(old);
    audit.tipo = 'upd';

    return await db.transaction(async (trans) => {
      return await model.update({data, audit}, trans);
    });
  },

  async delete(data, user) {
    let old = await model.findById(data, db);

    let audit = auditUtil.createDataAudit(user);
    audit.old_data = JSON.stringify(old);
    audit.new_data = null;
    audit.tipo = 'del';

    return await db.transaction(async (trans) => {
      return await model.delete({data, audit}, trans);
    });
  },

  async list(data) {
    return await baseListService({
      data: data,
      db: db,
      counter: model.count,
      lister: model.list
    });
  },

  async find(data) {
    return await model.findById(data, db);
  }
}