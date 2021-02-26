"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialects = exports.Dialect = void 0;
class Dialect {
    constructor(name, vocabulary) {
        this.name = name;
        this.vocabulary = vocabulary;
    }
}
exports.Dialect = Dialect;
var Dialects;
(function (Dialects) {
    Dialects["Pirate"] = "Pirate";
    Dialects["Cop"] = "Cop";
})(Dialects = exports.Dialects || (exports.Dialects = {}));
//# sourceMappingURL=dialects.interface.js.map