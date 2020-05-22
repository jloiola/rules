const groups = require('./groups');
const actions = require('./actions');
const metrics = require('./metrics');
const dates = require('./dates');
const booleans = require('./booleans');
const strings = require('./strings');

const asArray = [];
const asMap = {};

[...metrics, ...dates, ...booleans, ...strings, ...actions].forEach((field) => {
	if (field.groupKey) {
		field.group = groups[field.groupKey];
	}
	asMap[field.key] = field;
	asArray.push(field);
});

module.exports = {asArray, asMap};
