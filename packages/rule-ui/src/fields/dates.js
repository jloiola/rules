const moment = require('../resolvers/moment');
const jsonPath = require('../resolvers/jsonPath');
const fields = [];

fields.push({
	key: 'lastActionDate',
	displayName: 'Last Action Date',
	groupKey: 'date',
	resolver: (context) => moment(jsonPath(context, 'lastActionDate'), 'America/New_York'),
	editorKey: 'duration',
});

fields.push({
	key: 'createdDate',
	displayName: 'Create Date',
	groupKey: 'date',
	resolver: (context) => moment(jsonPath(context, 'createdDate'), 'America/New_York'),
	editorKey: 'duration',
	editorByOperator: '',
});

fields.push({
	key: 'stats.lastCallDate',
	displayName: 'Last Call Date',
	groupKey: 'date',
	resolver: (context) => moment(jsonPath(context, 'stats.lastCallDate'), 'America/New_York'),
	editorKey: 'duration',
});

fields.push({
	key: 'stats.lastPhoneAcceptAttemptUtc',
	displayName: 'Last Phone Accept Attempt',
	groupKey: 'date',
	resolver: (context) => moment(jsonPath(context, 'stats.lastPhoneAcceptAttemptUtc')),
});

module.exports = fields;
