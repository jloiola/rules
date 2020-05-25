const comparators = require('../operators/comparators');

class Comparator {
	constructor(operatorConfig = []) {
		if (operatorConfig.length > 0) {
			this.deserialize(operatorConfig);
		}
	}

	deserialize(operatorConfig) {
		const [comparator, type] = operatorConfig;
		Object.assign(this, comparators[type].asMap[comparator]);
	}
}

module.exports = Comparator;
