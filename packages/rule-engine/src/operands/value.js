const resolvers = require('../resolvers');

class Value {
	constructor(type, value) {
		this.operand = 'value';
		Object.assign(this, {type, value});
		this.cast = resolvers[this.type];
	}
	deserialize(operandConfig) {
		const [operand, type, value] = operandConfig;
		Object.assign(this, {operand, type, value});
		this.cast = resolvers[this.type];
	}
	serialize() {
		return [this.operand, this.type, this.path];
	}
	resolve() {
		return this.cast(this.value);
	}
}

module.exports = Value;
