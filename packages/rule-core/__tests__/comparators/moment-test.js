const moment = require('moment-timezone');
const {asMap} = require('../../src/operators/comparators/moment');
const {hasHappened, willHappen, olderThan} = asMap;

describe('comparators', () => {
	describe('moment', () => {
		it('has happened within', () => {
			expect.assertions(1);
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-10T00:00:00Z');
			expect(hasHappened.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(true);
		});

		it('has happened is not inclusive', () => {
			expect.assertions(1);
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-09T23:59:59Z');
			expect(hasHappened.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(false);
		});

		it('will happen within', () => {
			expect.assertions(1);
			const currentDate = moment('2020-05-10T00:00:00Z');
			const checkDate = moment('2020-05-19T23:59:59Z');
			expect(willHappen.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(true);
		});

		it('will happen is not inclusive', () => {
			expect.assertions(1);
			const currentDate = moment('2020-05-09T23:59:59Z');
			const checkDate = moment('2020-05-19T23:59:59Z');
			expect(willHappen.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(false);
		});

		it('older than', () => {
			expect.assertions(1);
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-10T00:00:00Z');
			expect(olderThan.exec(checkDate, currentDate, 9, 'days')).toStrictEqual(true);
		});

		it('not older than', () => {
			expect.assertions(1);
			const currentDate = moment('2020-05-19T23:59:59Z');
			const checkDate = moment('2020-05-10T00:00:00Z');
			expect(olderThan.exec(checkDate, currentDate, 10, 'days')).toStrictEqual(false);
		});
	});
});
