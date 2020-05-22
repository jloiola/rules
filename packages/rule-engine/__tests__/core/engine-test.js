const RuleEngine = require('../../src/core/rule-engine');

describe('operands/field', () => {
	it('can append a single rule', () => {
		expect.hasAssertions();
		const engine = new RuleEngine();
		const ruleExample = require('./example-rule-a.json');
		const mockData = [
			{birthday: {month: 6, year: 1998}},
			{birthday: {month: 6, year: 1998}},
			{birthday: {month: 5, year: 1990}},
			{birthday: {month: 8, year: 2000}},
		];

		engine.appendRulesFromConfig([ruleExample]);
		expect(engine.rules).toHaveLength(1);

		const {ruleState} = engine.build(mockData);
	});
});
