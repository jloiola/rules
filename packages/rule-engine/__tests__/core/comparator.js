const Comparator = require('../../src/core/comparator');

describe('operands/comparator', () => {
	it('can parse num equalTo', () => {
		expect.hasAssertions();
		const comparator = new Comparator(['equalTo', 'num']);
		expect(comparator).toBeInstanceOf(Comparator);
		expect(comparator.exec).toStrictEqual(expect.any(Function));
	});
});
