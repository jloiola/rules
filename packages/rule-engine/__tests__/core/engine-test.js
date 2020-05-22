const RuleEngine = require('../../src/core/rule-engine');

describe('operands/field', () => {
	it('can append a single rule', () => {
		expect.hasAssertions();
		const engine = new RuleEngine();
		const ruleExample = require('./example-rule-1.json');
		engine.appendRulesFromConfig([ruleExample]);
		expect(engine.rules).toHaveLength(1);
	});
});
