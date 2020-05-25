const resolvers = require('../resolvers');
const operands = [];

operands.push({
	key: 'number',
	resolver: resolvers.num,
	editor: {
		defaultArgs: [0],
		minValue: 0,
		validator: () => true,
	},
});

operands.push({
	key: 'boolean',
	resolver: resolvers.bool,
	editor: {
		defaultArgs: [true],
		validator: () => true,
	},
});

operands.push({
	key: 'string',
	resolver: resolvers.str,
	editor: {
		defaultArgs: [''],
		validator: () => true,
	},
});

operands.push({
	key: 'duration',
	resolver: resolvers.duration,
	editor: {
		defaultArgs: [1, 'days'],
		minValue: 1,
		unitOptions: ['hours', 'days', 'weeks', 'months', 'quarters'],
		validator: () => true,
	},
});

module.exports = operands;
