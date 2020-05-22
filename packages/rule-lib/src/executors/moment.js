// TODO use luxon or just native (think node and Intl support)
const moment = require('moment-timezone');

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

module.exports = {hasHappened, willHappen, olderThan};
