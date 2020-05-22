const {asMap: field} = require('../operands/field');
const {asMap: userDefined} = require('../operands/user-defined');

class Operand {
	constructor(operandConfig = []) {
		this.deserialize(operandConfig);
	}

	deserialize(operandConfig) {
		const [type, args] = operandConfig;
		if (type === 'field') {
			Object.assign(this, field[type], args);
		} else {
			Object.assign(this, userDefined[type]);
		}
	}
}

module.exports = Operand;
