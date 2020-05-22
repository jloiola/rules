// marries together LHS operand OPERATOR RHS operand
// LHS/RHS pasre as [editor, args]
const Operand = require('./operand');
const {asMap} = require('../operators/comparators');

class Comparator {
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
		Object.assign(asMap[comparator]);
		this.lhs = new Operand(lhs);
		this.rhs = new Operand(rhs);
	}
}

module.exports = Comparator;
