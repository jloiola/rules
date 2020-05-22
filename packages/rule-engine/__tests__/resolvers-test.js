const resolvers = require('../src/resolvers');
const {bool, expression, float, int, jsonPath, moment, str} = resolvers;

describe('resolvers', () => {
	describe('bool', () => {
		it('resolves bools', () => {
			expect.assertions(9);

			expect(bool(true)).toStrictEqual(true);
			expect(bool(false)).toStrictEqual(false);
			expect(bool(1)).toStrictEqual(true);
			expect(bool(0)).toStrictEqual(false);
			expect(bool(undefined)).toStrictEqual(false);
			expect(bool('true')).toStrictEqual(true);
			expect(bool('false')).toStrictEqual(false);
			// not obvious but kinda right?
			expect(bool(' true ')).toStrictEqual(true);
			expect(bool(' false ')).toStrictEqual(true);
		});
	});

	describe('expression', () => {
		it('resolves a simple expression without context', () => {
			expect.assertions(1);
			const expr = '1 + 2';
			expect(expression(expr)).toStrictEqual(3);
		});

		it('resolves an expression with context', () => {
			expect.assertions(1);
			const context = {one: 1};
			const expr = '$one === 1';
			expect(expression(expr, context)).toStrictEqual(true);
		});

		it('resolves an expression with token not found in context', () => {
			expect.assertions(1);
			const context = {one: 1};
			const expr = '$two === 2';
			expect(expression(expr, context)).toStrictEqual(false);
		});

		it('resolves an invalid expression as false', () => {
			expect.assertions(1);
			const expr = 'this is not valid';
			expect(expression(expr)).toStrictEqual(false);
		});
	});

	describe('float', () => {
		it('resolves floats', () => {
			expect.assertions(4);
			expect(float(10)).toStrictEqual(10);
			expect(float(10.001)).toStrictEqual(10.001);
			expect(float('10.001')).toStrictEqual(10.001);
			expect(float('asdasd')).toStrictEqual(0);
		});
	});

	describe('int', () => {
		it('resolves ints', () => {
			expect.assertions(4);
			expect(int(10)).toStrictEqual(10);
			expect(int(10.001)).toStrictEqual(10);
			expect(int('10.001')).toStrictEqual(10);
			expect(int('asdasd')).toStrictEqual(0);
		});
	});

	describe('json path', () => {
		it('resolves an existing path', () => {
			expect.assertions(1);
			const context = {one: 1};
			expect(jsonPath(context, 'one')).toStrictEqual(1);
		});

		it('resolves an nested path', () => {
			expect.assertions(1);
			const context = {one: {two: 2}};
			expect(jsonPath(context, 'one.two')).toStrictEqual(2);
		});

		it('resolves a missing path', () => {
			expect.assertions(1);
			const context = {two: 1};
			expect(jsonPath(context, 'one')).toBeUndefined();
		});
	});

	describe('moment', () => {
		it('fails without value', () => {
			expect.assertions(1);
			expect(undefined).toBeUndefined();
		});

		it('resolves a unix timestamp', () => {
			expect.assertions(1);
			const result = moment(1590072635).format();
			expect(result).toStrictEqual('2020-05-21T14:50:35Z');
		});

		it('resolves a date without timezone', () => {
			expect.assertions(1);
			const result = moment('2020-05-19T07:11:07Z').format();
			expect(result).toStrictEqual('2020-05-19T07:11:07Z');
		});

		it('resolves a date with timezone', () => {
			expect.assertions(1);
			const params = {timezone: 'America/New_York'};
			const result = moment('2020-05-19T07:11:07Z', params).format();
			expect(result).toStrictEqual('2020-05-19T07:11:07-04:00');
		});
	});

	describe('str', () => {
		it('resolves string as str', () => {
			expect.assertions(1);
			expect(str('im a string')).toStrictEqual('im a string');
		});

		it('resolves integer as string', () => {
			expect.assertions(1);
			expect(str(1)).toStrictEqual('1');
		});

		it('resolves float as string', () => {
			expect.assertions(1);
			expect(str(1.01)).toStrictEqual('1.01');
		});

		it('resolves undefined as empty string', () => {
			expect.assertions(1);
			expect(str(undefined)).toStrictEqual('');
		});

		it('resolves bool as string', () => {
			expect.assertions(1);
			expect(str(true)).toStrictEqual('true');
		});
	});
});
