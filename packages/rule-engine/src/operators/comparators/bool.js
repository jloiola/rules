const bool = require('../../resolvers/bool');
const isTrue = (src) => src;
const isFalse = (src) => !src;

const comparators = [];

comparators.push({
	type: 'comparator',
	resolver: bool,
	key: 'isTrue',
	token: 'is true',
	exec: isTrue,
	arity: 1,
});

comparators.push({
	type: 'comparator',
	resolver: bool,
	key: 'isFalse',
	token: 'is false',
	exec: isFalse,
	arity: 1,
});

module.exports = {
	asArray: comparators,
	asMap: comparators.reduce((acc, comparator) => {
		acc[comparator.key] = comparator;
		return acc;
	}, {}),
};
