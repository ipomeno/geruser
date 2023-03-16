const _ = require('lodash');

class StringUtil {

  formatarCpf (val) {
    if (!val) {
      return '';
    }

    val = val.replace(/[^0-9]/g, '');
    if (val.length < 11) {
      val = _.padStart(val, 11, '0');
    }

    return val.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  formatarTelefone (val) {
    if (!val) {
      return '';
    }

    val = val.replace(/[^0-9]/g, '');
    if (val.length == 11) {
      return val.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    if (val.length < 10) {
      val = _.padStart(val, 10, '0');
    }

    return val.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  formatarCep (val) {
    if (!val) {
      return '';
    }

    val = val.replace(/[^0-9]/g, '');
    if (val.length < 8) {
      val = _.padStart(val, 8, '0');
    }

    return val.replace(/^(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
  }

  padStart(val, length) {
    return _.padStart(val, length, '0');
  }
}

module.exports = new StringUtil();