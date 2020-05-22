const Comparator = require('./comparator');
const Field = require('../operands/field');
const Value = require('../operands/value');
const Expression = require('../operands/expression');

class Comparison {
	constructor(operatorConfig = []) {
		Object.assign(this, {
			lhs: undefined,
			comparator: undefined,
			rhs: undefined,
		});

		if (operatorConfig.length > 0) {
			this.deserialize(operatorConfig);
		}
	}

	deserialize(operatorConfig) {
		const [comparator, lhs, rhs] = operatorConfig;
		this.comparator = new Comparator(comparator);
		this.lhs = this.getOperand(lhs);
		this.rhs = this.getOperand(rhs);
	}

	exec(context) {
		const lhs = this.lhs.resolve(context);
		const rhs = this.rhs.resolve(context);
		return this.comparator.exec(lhs, rhs);
	}

	getOperand(operandConfig) {
		const [operand] = operandConfig;
		if (operand === 'field') {
			return new Field().deserialize(operandConfig);
		} else if (operand === 'value') {
			return new Value().deserialize(operandConfig);
		} else if (operand === 'expression') {
			return new Expression().deserialize(operandConfig);
		}
	}
}

module.exports = Comparison;
