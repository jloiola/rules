const equalTo = (src, arg) => src === arg;
const notEqualTo = (src, arg) => src !== arg;
const greaterThan = (src, arg) => src > arg;
const greaterThanEqual = (src, arg) => src >= arg;
const lessThan = (src, arg) => src < arg;
const lessThanEqual = (src, arg) => src <= arg;

module.exports = {equalTo, notEqualTo, greaterThan, greaterThanEqual, lessThan, lessThanEqual};
