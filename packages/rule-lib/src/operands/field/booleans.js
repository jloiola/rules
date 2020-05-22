const bool = require('../resolvers/bool');
const jsonPath = require('../resolvers/jsonPath');
const fields = [];

fields.push({
	key: 'paused',
	displayName: 'Paused',
	groupKey: 'boolean',
	resolver: (context) => bool(jsonPath(context, 'paused')),
	editorKey: 'boolean',
});

module.exports = fields;
