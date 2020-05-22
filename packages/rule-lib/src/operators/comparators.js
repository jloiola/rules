const bool = require('../executors/bool');
const base = require('../executors/base');
const moment = require('../executors/moment');
const str = require('../executors/str');

const comparators = [];

comparators.push({
	type: 'comparator',
	resolverType: 'number',
	key: 'equalTo',
	token: '==',
	exec: base.equalTo,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'number',
	key: 'greaterThan',
	token: '>',
	exec: base.greaterThan,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'number',
	key: 'greaterThanEqual',
	token: '>=',
	exec: base.greaterThanEqual,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'number',
	key: 'lessThan',
	token: '<',
	exec: base.lessThan,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'number',
	key: 'lessThanEqual',
	token: '<=',
	exec: base.lessThanEqual,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'moment',
	key: 'olderThan',
	token: 'is older than',
	exec: moment.olderThan,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'moment',
	key: 'hasHappened',
	token: 'is within the last',
	exec: moment.hasHappened,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'moment',
	key: 'willHappen',
	token: 'is within the next',
	exec: moment.willHappen,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'matches',
	token: 'is',
	exec: str.matches,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'startsWith',
	token: 'starts with',
	exec: str.startsWith,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'endsWith',
	token: 'ends with',
	exec: str.endsWith,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'includes',
	token: 'contains',
	exec: str.includes,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'excludes',
	token: 'does not contain',
	exec: str.excludes,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'boolean',
	key: 'is',
	token: 'is',
	exec: base.equalTo,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'boolean',
	key: 'isNot',
	token: 'is not',
	exec: base.notEqualTo,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'boolean',
	key: 'isTrue',
	token: 'is true',
	exec: bool.isTrue,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'boolean',
	key: 'isFalse',
	token: 'is false',
	exec: bool.isFalse,
	arity: 2,
});

module.exports = {
	asArray: (forType) => comparators.filter((p) => !forType || p.type === forType),
	asMap: (forType) =>
		comparators
			.filter((p) => !forType || p.type === forType)
			.reduce((acc, comparator) => {
				acc[comparator.key] = comparator;
				return acc;
			}, {}),
};
