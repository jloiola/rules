const num = require('../../resolvers/num');

const equalTo = (src, arg) => src === arg;
const notEqualTo = (src, arg) => src !== arg;
const greaterThan = (src, arg) => src > arg;
const greaterThanEqual = (src, arg) => src >= arg;
const lessThan = (src, arg) => src < arg;
const lessThanEqual = (src, arg) => src <= arg;

const comparators = [];

comparators.push({
	type: 'comparator',
	resolve: num,
	key: 'equalTo',
	token: '==',
	exec: equalTo,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolve: num,
	key: 'notEqualTo',
	token: '==',
	exec: notEqualTo,
	arity: 2,
});
comparators.push({
	type: 'comparator',
	resolve: num,
	key: 'greaterThan',
	token: '>',
	exec: greaterThan,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolve: num,
	key: 'greaterThanEqual',
	token: '>=',
	exec: greaterThanEqual,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolve: num,
	key: 'lessThan',
	token: '<',
	exec: lessThan,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolve: num,
	key: 'lessThanEqual',
	token: '<=',
	exec: lessThanEqual,
	arity: 2,
});

module.exports = {
	asArray: comparators,
	asMap: comparators.reduce((acc, comparator) => {
		acc[comparator.key] = comparator;
		return acc;
	}, {}),
};
