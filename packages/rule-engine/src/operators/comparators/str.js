const matches = (src, arg) => src.toLowerCase() === arg.toLowerCase();
const startsWith = (src, arg) => src.toLowerCase().startsWith(arg.toLowerCase());
const endsWith = (src, arg) => src.toLowerCase().endsWith(arg.toLowerCase());
const includes = (src, arg) => src.toLowerCase().includes(arg.toLowerCase());
const excludes = (src, arg) => !src.toLowerCase().includes(arg.toLowerCase());

const comparators = [];

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'matches',
	token: 'is',
	exec: matches,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'startsWith',
	token: 'starts with',
	exec: startsWith,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'endsWith',
	token: 'ends with',
	exec: endsWith,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'includes',
	token: 'contains',
	exec: includes,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolverType: 'string',
	key: 'excludes',
	token: 'does not contain',
	exec: excludes,
	arity: 2,
});

module.exports = {
	asArray: comparators,
	asMap: comparators.reduce((acc, comparator) => {
		acc[comparator.key] = comparator;
		return acc;
	}, {}),
};
