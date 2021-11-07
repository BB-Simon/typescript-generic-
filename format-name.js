"use strict";
exports.__esModule = true;
exports.formatName = void 0;
function formatName(name) {
    return "" + (name === null || name === void 0 ? void 0 : name.last) + ((name === null || name === void 0 ? void 0 : name.last) && (name === null || name === void 0 ? void 0 : name.first) ? ', ' : '') + (name === null || name === void 0 ? void 0 : name.first);
}
exports.formatName = formatName;
var obj = {
    last: "Chowdery",
    first: "Simon"
};
var formattedName = formatName(obj);
console.log(formattedName);
