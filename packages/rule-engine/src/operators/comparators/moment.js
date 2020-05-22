// TODO use luxon or just native (think node and Intl support)
const moment = require('moment-timezone');
const momentResolver = require('../../resolvers/moment');

const hasHappened = (srcMoment, fromMoment, value, units) => {
	const leftBound = fromMoment.clone().subtract(value, units);
	const rightBound = fromMoment.clone();
	return moment(srcMoment).isBetween(leftBound, rightBound);
};

const willHappen = (srcMoment, fromMoment, value, units) => {
	const leftBound = fromMoment.clone();
	const rightBound = fromMoment.clone().add(value, units);
	return moment(srcMoment).isBetween(leftBound, rightBound);
};

const olderThan = (srcMoment, fromMoment, value, units) => {
	const leftBound = fromMoment.clone().subtract(value, units);
	return moment(srcMoment).isBefore(leftBound);
};

const comparators = [];

comparators.push({
	type: 'comparator',
	resolver: momentResolver,
	key: 'olderThan',
	token: 'is older than',
	exec: olderThan,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolver: momentResolver,
	key: 'hasHappened',
	token: 'is within the last',
	exec: hasHappened,
	arity: 2,
});

comparators.push({
	type: 'comparator',
	resolver: momentResolver,
	key: 'willHappen',
	token: 'is within the next',
	exec: willHappen,
	arity: 2,
});

module.exports = {
	asArray: comparators,
	asMap: comparators.reduce((acc, comparator) => {
		acc[comparator.key] = comparator;
		return acc;
	}, {}),
};
