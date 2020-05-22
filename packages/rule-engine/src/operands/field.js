const jsonPath = require('../resolvers/json-path');
const resolvers = require('../resolvers');

class Field {
	constructor(type, path) {
		this.operand = 'field';
		Object.assign(this, {type, path});
		// identity is questionable ...
		this.cast = resolvers[this.type] || resolvers.identity;
	}
	deserialize(operandConfig) {
		const [operand, type, path] = operandConfig;
		Object.assign(this, {operand, type, path});
		this.cast = resolvers[this.type];
		return this;
	}
	serialize() {
		return [this.operand, this.type, this.path];
	}
	resolve(context) {
		return this.cast(jsonPath(context, this.path));
	}
}

module.exports = Field;
