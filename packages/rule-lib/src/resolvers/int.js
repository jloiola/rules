module.exports = (value) => {
	if (Number.isInteger(value)) {
		return value;
	}

	if (Number.isFinite(value)) {
		return Math.trunc(value);
	} else {
		const tryValue = Number.parseInt(value);
		if (Number.isNaN(tryValue)) {
			return 0;
		} else {
			return tryValue;
		}
	}
};
