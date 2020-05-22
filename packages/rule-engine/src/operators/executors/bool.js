const isEqual = (src, arg) => src === arg;
const isNotEqual = (src, arg) => src !== arg;
const isTrue = (src) => src;
const isFalse = (src) => !src;

module.exports = {isEqual, isNotEqual, isTrue, isFalse};
