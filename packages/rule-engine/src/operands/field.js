const jsonPath = require('../resolvers/jsonPath');
const resolvers = require('../resolvers');

class Field {
	constructor({type, path}) {
		this.operand = 'field';
		Object.assign(this, {type, path});
		this.cast = resolvers[this.type];
	}
	deserialize(operandConfig) {
		const [operand, type, path] = operandConfig;
		Object.assign(this, {operand, type, path});
	}
	serialize() {
		return [this.operand, this.type, this.path];
	}
	resolver(context) {
		return this.cast(jsonPath(context, this.path));
	}
}

module.exports = Field;
