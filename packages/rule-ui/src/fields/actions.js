const int = require('../resolvers/int');
const jsonPath = require('../resolvers/jsonPath');
const fields = [];

fields.push({
	key: 'stats.needsPhoneAccept',
	displayName: 'Needs Phone Accept',
	groupKey: 'action',
	resolver: (context) => int(jsonPath(context, 'stats.needsPhoneAccept')),
});

fields.push({
	key: 'stats.progessToGoal',
	displayName: 'Progress to goal',
	groupKey: 'action',
	resolver: (context) => int(jsonPath(context, 'stats.progessToGoal')),
});

fields.push({
	key: 'stats.needsSendToClient',
	displayName: 'Needs Send to Client',
	groupKey: 'action',
	resolver: (context) => int(jsonPath(context, 'stats.needsSendToClient')),
});

fields.push({
	key: 'stats.needsSchedulingFollowup',
	displayName: 'Needs Scheduling Follow-up',
	groupKey: 'action',
	resolver: (context) => int(jsonPath(context, 'stats.needsSchedulingFollowup')),
});

module.exports = fields;
