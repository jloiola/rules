const and = (context, operators) =>
	operators.every((operator) => operator.exec(context, operator.args));

const or = (context, operators) =>
	operators.every((operator) => operator.exec(context, operator.args));

module.exports = {and, or};
