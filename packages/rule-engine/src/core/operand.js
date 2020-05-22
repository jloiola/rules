const Field = require('../operands/field');
const Value = require('../operands/value');
const Expression = require('../operands/expression');

class Operand {
	constructor(operandConfig = []) {
		this.deserialize(operandConfig);
	}

	deserialize(operandConfig) {
		const [operand] = operandConfig;
		if (operand === 'field') {
			Object.assign(this, new Field().deserialize(operandConfig));
		} else if (operand === 'value') {
			Object.assign(this, new Value().deserialize(operandConfig));
		} else if (operand === 'expression') {
			Object.assign(this, new Expression().deserialize(operandConfig));
		}
	}
}

module.exports = Operand;
