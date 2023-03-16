const bcrypt = require('bcryptjs');

const SALT_CONFIG = 10;

module.exports = {
  async hash(string) {
    let salt = await bcrypt.genSalt(SALT_CONFIG);
    return await bcrypt.hash(string, salt);
  },

  async compare(stra, hash) {
    return await bcrypt.compare(stra, hash);
  }
};