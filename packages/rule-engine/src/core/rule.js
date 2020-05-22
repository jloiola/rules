const Predicate = require('./predicate.coffee');
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
			predicate: [['and', []]],
		});

		this.deserialize(initConfig);
	}

	deserialize({key, display, predicate, meta}) {
		Object.assign(this, {key, display, meta});
		this.predicate = new Predicate(predicate);
		return this;
	}

	serialize() {
		const predicate = this.predicate.serialize();
		const {key, display, meta} = this;
		return Object.assign({}, {key, display, predicate, meta});
	}

	clone() {
		const cloned = JSON.parse(JSON.stringify(this.serialize()));
		this.deserialize(cloned);
	}

	run(context) {
		this.predicate.exec(context);
	}
}

module.exports = Rule;
