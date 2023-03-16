const { faker } = require('@faker-js/faker');
const stringUtil = require('../../../libs/stringUtil');

module.exports = () => {
  return {
    nome: faker.name.fullName(),
    cpf: stringUtil.formatarCpf(faker.random.numeric(11)),
    telefone: stringUtil.formatarTelefone(faker.random.numeric(11)),
    email: faker.internet.email(),
    senha: '123',
    cadastro: faker.date.between('2023-01-01', '2023-08-31'),
    alteracao: faker.date.between('2023-02-01', '2023-12-31'),
    ativo: true,
  };
};