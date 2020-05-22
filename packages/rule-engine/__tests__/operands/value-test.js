const Value = require('../../src/operands/value');

describe('operands/value', () => {
	it('can instantiate empty args', () => {
		expect.hasAssertions();
		expect(new Value()).toBeInstanceOf(Value);
	});

	it('can be a bool', () => {
		expect.hasAssertions();
		const value = new Value('bool', true);
		expect(value).toBeInstanceOf(Value);
		expect(value.resolve()).toStrictEqual(true);
	});
});
