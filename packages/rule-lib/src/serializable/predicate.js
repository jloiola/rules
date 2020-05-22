// is our entry point ... kinda dont need it but ok
const Operator = require('./Operator');

class Predicate {
	constructor(operatorConfig) {
		return this.deserialize(operatorConfig);
	}

	serialize() {
		return this.rootOperator.serialize();
	}

	deserialize(operatorConfigs) {
		// if we dont have exactly one element; maybe make it so
		this.rootOperator = new Operator(operatorConfigs);
	}
}

module.exports = Predicate;
