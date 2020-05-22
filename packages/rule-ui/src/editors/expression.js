const {expression, num} = require('../resolvers');

class Expression {
	constructor(operandConfig = []) {
		Object.assign(this, {
			operand: 'expression',
			expression: '',
		});
		if (operandConfig.length > 0) {
			this.deserialize(operandConfig);
		}
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
