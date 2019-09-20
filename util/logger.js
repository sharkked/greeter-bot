const moment = require('moment');

module.exports = {
    log: function (msg) {
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`);
    },

    error: function (err) {
        console.error(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${err}`);
    }
}