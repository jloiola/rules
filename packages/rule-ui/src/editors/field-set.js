const Field = require('./field');

class FieldSet {
	constructor(fields) {
		this.fields = fields.map((field) => new Field(field));
	}
}

module.exports = FieldSet;
