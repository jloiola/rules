const jsonPath = require('../resolvers/jsonPath');
const resolvers = require('../resolvers');

class Field {
	constructor({key, type, path, name, group}) {
		Object.assign(this, {key, display: {name, group}, path, type});
		this.cast = resolvers[type];
	}
	resolver(context) {
		return this.cast(jsonPath(context, this.path));
	}
}

module.exports = Field;
