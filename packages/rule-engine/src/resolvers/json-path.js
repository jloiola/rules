const get = require('lodash.get');

module.exports = (context, path) => get(context, path);
