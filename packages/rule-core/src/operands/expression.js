const {expression, num} = require('../resolvers');

class Expression {
	constructor(expression) {
		Object.assign(this, {
			operand: 'expression',
			type: 'num',
			expression,
		});
	}
	deserialize(operandConfig) {
		const [operand, expression] = operandConfig;
		Object.assign(this, {expression, operand});
		return this;
	}
	serialize() {
		return [this.operand, this.expression];
	}
	resolve(context = {}) {
		return num(expression(this.expression, context));
	}
}

module.exports = Expression;
