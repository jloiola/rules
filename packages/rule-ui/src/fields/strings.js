const str = require('../resolvers/str');
const jsonPath = require('../resolvers/jsonPath');
const fields = [];

fields.push({
	key: 'title',
	displayName: 'Project Title',
	groupKey: 'string',
	editorKey: 'string',
	resolver: (context) => str(jsonPath(context, 'title')),
});

fields.push({
	key: 'caseCode',
	displayName: 'Case Code',
	groupKey: 'string',
	editorKey: 'string',
	resolver: (context) => str(jsonPath(context, 'caseCode')),
});

fields.push({
	key: 'clientFirm.name',
	displayName: 'Client Name',
	groupKey: 'string',
	editorKey: 'string',
	resolver: (context) => str(jsonPath(context, 'clientFirm.name')),
});

fields.push({
	key: 'folder.title',
	displayName: 'Folder Name',
	groupKey: 'string',
	editorKey: 'string',
	resolver: (context) => str(jsonPath(context, 'folder.title')),
});

module.exports = fields;
