const {asMap} = require('../../src/operators/comparators/str');
const {matches, startsWith, endsWith, includes, excludes} = asMap;

describe('comparators', () => {
	describe('str', () => {
		it('matches', () => {
			expect.assertions(3);
			expect(matches.exec('DAYS', 'days')).toStrictEqual(true);
			expect(matches.exec('days', 'days')).toStrictEqual(true);
			expect(matches.exec('day', 'days')).toStrictEqual(false);
		});
		it('startsWith', () => {
			expect.assertions(2);
			expect(startsWith.exec('day goes', 'day')).toStrictEqual(true);
			expect(startsWith.exec('a day goes', 'day')).toStrictEqual(false);
		});
		it('endsWith', () => {
			expect.assertions(2);
			expect(endsWith.exec('day goes', 'goes')).toStrictEqual(true);
			expect(endsWith.exec('a day goes', 'day')).toStrictEqual(false);
		});
		it('includes', () => {
			expect.assertions(2);
			expect(includes.exec('a day goes', 'day')).toStrictEqual(true);
			expect(includes.exec('a day goes', 'goose')).toStrictEqual(false);
		});
		it('excludes', () => {
			expect.assertions(2);
			expect(excludes.exec('a day goes', 'foosball')).toStrictEqual(true);
			expect(excludes.exec('a day goes', 'day')).toStrictEqual(false);
		});
	});
});
