const {asMap} = require('../../src/operators/comparators/bool');
const {isTrue, isFalse} = asMap;

describe('comparators', () => {
	describe('bool', () => {
		it('isTrue', () => {
			expect.assertions(1);
			expect(isTrue.exec(true)).toStrictEqual(true);
		});
		it('isFalse', () => {
			expect.assertions(1);
			expect(isFalse.exec(false)).toStrictEqual(true);
		});
	});
});
