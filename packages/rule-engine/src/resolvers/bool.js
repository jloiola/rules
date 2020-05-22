module.exports = (value) => {
	if (typeof value === 'string' && /^true$/i.test(value)) {
		return true;
	} else if (typeof value === 'string' && /^false$/i.test(value)) {
		return false;
	} else {
		return !!value;
	}
};
