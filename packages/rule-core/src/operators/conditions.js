const and = (context, operators) =>
	operators.every((operator) => operator.exec(context, operator.args));

const or = (context, operators) =>
	operators.every((operator) => operator.exec(context, operator.args));

const conditions = [];

conditions.push({
	type: 'condition',
	key: 'and',
	token: 'All must match',
	exec: and,
});

conditions.push({
	type: 'condition',
	key: 'or',
	token: 'Any can match',
	exec: or,
});

module.exports = {
	asArray: conditions,
	asMap: conditions.reduce((acc, condition) => {
		acc[condition.key] = condition;
		return acc;
	}, {}),
};
