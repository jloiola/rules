const num = require('../resolvers/num');
const jsonPath = require('../resolvers/jsonPath');
const fields = [];

fields.push({
	key: 'stats.priority',
	displayName: 'Priority Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.priority')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.invited',
	displayName: 'Invited Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.invited')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.accepted',
	displayName: 'Accepted Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.accepted')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.published',
	displayName: 'Publish Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.published')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.sentToClient',
	displayName: 'Sent to Client Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.sentToClient')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.callReady',
	displayName: 'Scheduled Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.callReady')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.callOccurred',
	displayName: 'Call Occurred Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.callOccurred')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.schedulingInProgress',
	displayName: 'Scheduling in Progress Count',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.schedulingInProgress')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.schedulingHold',
	displayName: 'Scheduling Hold ',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.schedulingHold')),
	editorKey: 'number',
});

fields.push({
	key: 'stats.goal',
	displayName: 'Project Funnel Goal',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'stats.goal')),
	editorKey: 'number',
});

fields.push({
	key: 'folder.goal',
	displayName: 'Engagement Funnel Goal',
	groupKey: 'metric',
	resolver: (context) => num(jsonPath(context, 'folder.goal')),
	editorKey: 'number',
});

module.exports = fields;
