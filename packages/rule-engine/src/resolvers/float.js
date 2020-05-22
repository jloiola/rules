module.exports = (value) => {
	const tryValue = Number.parseFloat(value);
	if (Number.isNaN(tryValue)) {
		return 0;
	} else {
		return tryValue;
	}
};
