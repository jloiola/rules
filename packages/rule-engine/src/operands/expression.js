const {expression, num} = require('../resolvers');

class Expression {
	constructor({expression}) {
		Object.assign(this, {
			operand: 'expression',
			expression,
		});
	}
	deserialize(operandConfig) {
		const [operand, expression] = operandConfig;
		Object.assign(this, {expression, operand});
	}
	serialize() {
		return [this.operand, this.expression];
	}
	resolver(context = {}) {
		return num(expression(this.expression, context));
	}
	validator() {}
}

module.exports = Expression;
