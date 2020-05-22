const Field = require('../../src/operands/field');

describe('operands/field', () => {
	it('can instantiate empty args', () => {
		expect.hasAssertions();
		expect(new Field()).toBeInstanceOf(Field);
	});

	it('can resolve num field', () => {
		expect.hasAssertions();
		const field = new Field('num', 'two');
		expect(field).toBeInstanceOf(Field);
		expect(field.resolve({two: 2})).toStrictEqual(2);
	});

	it('can resolve nested num field', () => {
		expect.hasAssertions();
		const field = new Field('num', 'two.one');
		expect(field).toBeInstanceOf(Field);
		expect(field.resolve({two: {one: 1}})).toStrictEqual(1);
	});
});
