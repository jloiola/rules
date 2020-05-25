const Operator = require('./operator');
const {v4: uuidv4} = require('uuid');

class Rule {
	constructor(initConfig = {}) {
		Object.assign(this, {
			key: uuidv4(),
			display: {
				rank: 0,
				name: '',
				description: '',
				color: '#4444FF',
				showBadge: true,
				showFolderAggregate: false,
				filterGroupKey: 'actionItems',
			},
			meta: {
				created: undefined,
				updated: undefined,
			},
			rule: [['and', []]],
		});

		this.deserialize(initConfig);
	}

	deserialize({key, display, rule, meta}) {
		Object.assign(this, {key, display, meta});
		this.rootOperator = new Operator(rule)[0];
	}

	serialize() {
		const rule = this.rule.serialize();
		const {key, display, meta} = this;
		return Object.assign({}, {key, display, rule, meta});
	}

	clone() {
		const cloned = JSON.parse(JSON.stringify(this.serialize()));
		this.deserialize(cloned);
	}

	run(context) {
		const result = this.rootOperator.exec(context, this.rootOperator.args);
		return result;
	}
}

module.exports = Rule;
