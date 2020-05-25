module.exports = {
	bool: require('./bool'),
	expression: require('./expression'),
	num: require('./num'),
	jsonPath: require('./json-path'),
	moment: require('./moment'),
	str: require('./str'),
	identity: (value) => value,
};
