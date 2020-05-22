const {asMap} = require('../operators/conditions');

class Condition {
	constructor(operatorConfig) {
		return this.deserialize(operatorConfig);
	}

	deserialize(operatorConfig) {
		const [operatorFunc] = operatorConfig;
		Object.assign(this, asMap[operatorFunc]);
	}

	serialize(operatorFunc, operatorArgs) {
		Object.assign(this, {operatorFunc, operatorArgs});
	}
}

module.exports = Condition;
