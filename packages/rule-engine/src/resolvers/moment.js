// TODO use luxon or just native (think server side here and Intl support)
const moment = require('moment-timezone');

module.exports = (value, params = {}) => {
	const isDateStringWithTz = typeof value === 'string' && value.endsWith('Z');

	if (Number.isInteger(value)) {
		return moment.unix(value).utc();
	} else if (isDateStringWithTz && !params.timezone) {
		return moment(value).utc();
	} else if (isDateStringWithTz && params.timezone) {
		return moment.tz(value.slice(0, -1), params.timezone);
	} else {
		return undefined;
	}
};
