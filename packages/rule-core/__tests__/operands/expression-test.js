const Expression = require('../../src/operands/expression');

describe('operands/expression', () => {
	it('can instantiate empty args', () => {
		expect.hasAssertions();
		expect(new Expression()).toBeInstanceOf(Expression);
	});

	it('can be Expression', () => {
		expect.hasAssertions();
		const expr = new Expression('1 + 1');
		expect(expr).toBeInstanceOf(Expression);
		expect(expr.resolve()).toStrictEqual(2);
	});

	it('must be a number', () => {
		expect.hasAssertions();
		const expr = new Expression('16 / 2');
		expect(expr).toBeInstanceOf(Expression);
		expect(expr.resolve()).toStrictEqual(8);
	});
});
