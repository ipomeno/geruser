const numberUtil = require('./numberUtil');
const dateUtil = require('./dateUtil');

module.exports = {
  createDataAudit(userData) {
    return {
      id: numberUtil.createId(),
      cadastro: dateUtil.dateTimeNow(),
      new_data: null,
      old_data: null,
      tipo: null,
      usuario: userData.nome,
      seguranca_usuario_id: userData.id,
      empresa: userData.empresa_nome,
      pessoal_empresa_id: userData.pessoal_empresa_id,
      ip: userData.ip,
      url: userData.url,
      user_agent: userData.user_agent,
    };
  }
};