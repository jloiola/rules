const {and, or} = require('./executors/condition');
const conditions = [];

conditions.push({
	type: 'condition',
	key: 'and',
	token: 'All must match',
	arity: 1,
	exec: and,
});

conditions.push({
	type: 'condition',
	key: 'or',
	token: 'Any can match',
	arity: 1,
	exec: or,
});

module.exports = {
	asArray: conditions,
	asMap: conditions.reduce((acc, condition) => {
		acc[condition.key] = condition;
		return acc;
	}),
};
