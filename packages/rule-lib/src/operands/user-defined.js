const operands = [];

operands.push({
	key: 'number',
	defaultArgs: [0],
	minValue: 0,
	validator: () => {},
});

operands.push({
	key: 'boolean',
	defaultArgs: [true],
	validator: () => {},
});

operands.push({
	key: 'string',
	defaultArgs: [''],
	validator: () => {},
});

operands.push({
	key: 'duration',
	defaultArgs: [1, 'days'],
	minValue: 1,
	unitOptions: ['hours', 'days', 'weeks', 'months', 'quarters'],
	validator: () => {},
});

operands.push({
	key: 'expression',
	validator: () => {
		// reduce vars to valid js aka we arent verifying them
		// eval to be sure the rest is valid-ish js?
		// the result can still be nonsense but valid eval
	},
});

module.exports = module.exports = {
	asArray: operands,
	asMap: operands.reduce((acc, operand) => {
		acc[operand.key] = operand;
		return acc;
	}),
};
