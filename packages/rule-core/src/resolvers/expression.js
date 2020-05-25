const {error} = require('ulog')('resolve:expression');
const get = require('lodash.get');
const tokens = new RegExp(/\$([.A-z]*)/, 'g');

module.exports = (expr, context = {}) => {
	try {
		const paths = expr.match(tokens);
		if (paths) {
			paths.forEach((path) => {
				const value = get(context, path.slice(1));
				expr = expr.replace(path, value);
			});
		}
		return eval(expr);
	} catch (error_) {
		error(error_);
		return false;
	}
};
