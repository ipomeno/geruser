const moment = require("moment");
const _ = require('lodash');

module.exports = {

  dateNow() {
    return moment().format('YYY-MM-DD');
  },

  dateTimeNow() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  },

  formatDateSQL(val) {
    return moment(val).format('YYYY-MM-DD');
  },

  formatDateTimeSQL(val) {
    return moment(val).format('YYYY-MM-DD HH:mm:ss');
  },

  parseDateSQL(val) {
    return moment(val).format();
  },

  formatDate(val) {
    return moment(val).format('DD/MM/YYYY')
  },

  formatDateTime(val) {
    return moment(val).format('DD/MM/YYYY HH:mm:ss');
  }

};