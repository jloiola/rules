// const operators = require('../operators');
const Condition = require('./Condition');
const Comparison = require('./Comparison');

class Operator {
	constructor(operatorConfig) {
		return this.deserialize(operatorConfig);
	}

	deserialize(operatorConfigs) {
		return operatorConfigs.map((operatorConfig) => {
			const [operator, args] = operatorConfig;
			if (['and', 'or'].includes(operator)) {
				const condition = new Condition(operatorConfig);
				condition.args = this.deserialize(args);
				return condition;
			} else {
				const comparison = new Comparison(operatorConfig);
				return comparison;
			}
		});
	}
}

module.exports = Operator;
