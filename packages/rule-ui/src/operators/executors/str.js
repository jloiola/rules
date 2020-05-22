const matches = (src, arg) => src.toLowerCase() === arg.toLowerCase();
const startsWith = (src, arg) => src.toLowerCase().startsWith(arg.toLowerCase());
const endsWith = (src, arg) => src.toLowerCase().endsWith(arg.toLowerCase());
const includes = (src, arg) => src.toLowerCase().includes(arg.toLowerCase());
const excludes = (src, arg) => !src.toLowerCase().includes(arg.toLowerCase());
module.exports = {matches, startsWith, endsWith, includes, excludes};
