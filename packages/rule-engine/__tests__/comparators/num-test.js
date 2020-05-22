const {asMap} = require('../../src/operators/comparators/num');
const {equalTo, notEqualTo, greaterThan, greaterThanEqual, lessThan, lessThanEqual} = asMap;

describe('comparators', () => {
	describe('num', () => {
		it('equalTo', () => {
			expect.assertions(3);
			expect(equalTo.exec(1, 1)).toStrictEqual(true);
			expect(equalTo.exec(1, 2)).toStrictEqual(false);
			expect(equalTo.exec(1.01, 1.01)).toStrictEqual(true);
		});
		it('notEqualTo', () => {
			expect.assertions(2);
			expect(notEqualTo.exec(1, 1)).toStrictEqual(false);
			expect(notEqualTo.exec(1, 2)).toStrictEqual(true);
		});
		it('greaterThan', () => {
			expect.assertions(2);
			expect(greaterThan.exec(1, 1)).toStrictEqual(false);
			expect(greaterThan.exec(2, 1)).toStrictEqual(true);
		});
		it('greaterThanEqual', () => {
			expect.assertions(2);
			expect(greaterThanEqual.exec(1, 1)).toStrictEqual(true);
			expect(greaterThanEqual.exec(2, 1)).toStrictEqual(true);
		});
		it('lessThan', () => {
			expect.assertions(2);
			expect(lessThan.exec(1, 1)).toStrictEqual(false);
			expect(lessThan.exec(1, 2)).toStrictEqual(true);
		});
		it('lessThanEqual', () => {
			expect.assertions(2);
			expect(lessThanEqual.exec(1, 1)).toStrictEqual(true);
			expect(lessThanEqual.exec(1, 1)).toStrictEqual(true);
		});
	});
});
