// const operators = require('../operators');
const Condition = require('./Condition');
const Comparator = require('./Comparator');

class Operator {
	constructor(operatorConfig) {
		return this.deserialize(operatorConfig);
	}

	deserialize(operatorConfigs) {
		return operatorConfigs.map((operatorConfig) => {
			const [operator, ...args] = operatorConfig;
			if (operator.type === 'condition') {
				const condition = new Condition(operatorConfig);
				condition.deserialize(args);
				return condition;
			} else {
				return new Comparator(operatorConfig);
			}
		});
	}
}

module.exports = Operator;
