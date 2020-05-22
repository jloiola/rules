const moment = require('moment-timezone');
const {asMap} = require('../src/operators/comparators');

describe('comparators', () => {
	describe('bool', () => {
		it('isTrue', () => {
			expect.assertions(1);
			const {isTrue} = asMap('boolean');
			expect(isTrue.exec(true)).toStrictEqual(true);
		});
		it('isFalse', () => {
			expect.assertions(1);
			const {isFalse} = asMap('boolean');
			expect(isFalse.exec(false)).toStrictEqual(true);
		});
		it('is', () => {
			expect.assertions(4);
			const {is} = asMap('boolean');
			expect(is.exec(false, true)).toStrictEqual(false);
			expect(is.exec(true, false)).toStrictEqual(false);
			expect(is.exec(true, true)).toStrictEqual(true);
			expect(is.exec(false, false)).toStrictEqual(true);
		});
		it('isNot', () => {
			expect.assertions(4);
			const {isNot} = asMap('boolean');
			expect(isNot.exec(false, true)).toStrictEqual(true);
			expect(isNot.exec(true, false)).toStrictEqual(true);
			expect(isNot.exec(true, true)).toStrictEqual(false);
			expect(isNot.exec(false, false)).toStrictEqual(false);
		});
	});

	describe('num', () => {
		it('equalTo', () => {
			expect.assertions(3);
			const {equalTo} = asMap('number');
			expect(equalTo.exec(1, 1)).toStrictEqual(true);
			expect(equalTo.exec(1, 2)).toStrictEqual(false);
			expect(equalTo.exec(1.01, 1.01)).toStrictEqual(true);
		});
		it('greaterThan', () => {
			expect.assertions(2);
			const {greaterThan} = asMap('number');
			expect(greaterThan.exec(1, 1)).toStrictEqual(false);
			expect(greaterThan.exec(2, 1)).toStrictEqual(true);
		});
		it('greaterThanEqual', () => {
			expect.assertions(2);
			const {greaterThanEqual} = asMap('number');
			expect(greaterThanEqual.exec(1, 1)).toStrictEqual(true);
			expect(greaterThanEqual.exec(2, 1)).toStrictEqual(true);
		});
		it('lessThan', () => {
			expect.assertions(2);
			const {lessThan} = asMap('number');
			expect(lessThan.exec(1, 1)).toStrictEqual(false);
			expect(lessThan.exec(1, 2)).toStrictEqual(true);
		});
		it('lessThanEqual', () => {
			expect.assertions(2);
			const {lessThanEqual} = asMap('number');
			expect(lessThanEqual.exec(1, 1)).toStrictEqual(true);
			expect(lessThanEqual.exec(1, 1)).toStrictEqual(true);
		});
	});

	describe('moment', () => {
		it('has happened within', () => {
			expect.assertions(1);
			const {hasHappened} = asMap('moment');
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-10T00:00:00Z');
			expect(hasHappened.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(true);
		});

		it('has happened is not inclusive', () => {
			expect.assertions(1);
			const {hasHappened} = asMap('moment');
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-09T23:59:59Z');
			expect(hasHappened.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(false);
		});

		it('will happen within', () => {
			expect.assertions(1);
			const {willHappen} = asMap('moment');
			const currentDate = moment('2020-05-10T00:00:00Z');
			const checkDate = moment('2020-05-19T23:59:59Z');
			expect(willHappen.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(true);
		});

		it('will happen is not inclusive', () => {
			expect.assertions(1);
			const {willHappen} = asMap('moment');
			const currentDate = moment('2020-05-09T23:59:59Z');
			const checkDate = moment('2020-05-19T23:59:59Z');
			expect(willHappen.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(false);
		});

		it('older than', () => {
			expect.assertions(1);
			const {olderThan} = asMap('moment');
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-10T00:00:00Z');
			expect(olderThan.exec(checkDate, currentDate, 9, 'days')).toStrictEqual(true);
		});

		it('not older than', () => {
			expect.assertions(1);
			const {olderThan} = asMap('moment');
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-10T00:00:00Z');
			expect(olderThan.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(false);
		});
	});

	describe('str', () => {
		it('matches', () => {
			expect.assertions(3);
			const {matches} = asMap('string');
			expect(matches.exec('DAYS', 'days')).toStrictEqual(true);
			expect(matches.exec('days', 'days')).toStrictEqual(true);
			expect(matches.exec('day', 'days')).toStrictEqual(false);
		});
		it('startsWith', () => {
			expect.assertions(2);
			const {startsWith} = asMap('string');
			expect(startsWith.exec('day goes', 'day')).toStrictEqual(true);
			expect(startsWith.exec('a day goes', 'day')).toStrictEqual(false);
		});
		it('endsWith', () => {
			expect.assertions(2);
			const {endsWith} = asMap('string');
			expect(endsWith.exec('day goes', 'goes')).toStrictEqual(true);
			expect(endsWith.exec('a day goes', 'day')).toStrictEqual(false);
		});
		it('includes', () => {
			expect.assertions(2);
			const {includes} = asMap('string');
			expect(includes.exec('a day goes', 'day')).toStrictEqual(true);
			expect(includes.exec('a day goes', 'goose')).toStrictEqual(false);
		});
		it('excludes', () => {
			expect.assertions(2);
			const {excludes} = asMap('string');
			expect(excludes.exec('a day goes', 'foosball')).toStrictEqual(true);
			expect(excludes.exec('a day goes', 'day')).toStrictEqual(false);
		});
	});
});
