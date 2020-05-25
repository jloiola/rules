const {asMap} = require('../operators/conditions');

class Condition {
	constructor(operatorConfig) {
		return this.deserialize(operatorConfig);
	}

	deserialize(operatorConfig) {
		const [operator] = operatorConfig;
		Object.assign(this, asMap[operator]);
	}

	serialize(operator, args) {
		Object.assign(this, {operator, args});
	}
}

module.exports = Condition;
