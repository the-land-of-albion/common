"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechHandler = exports.SpeechHandler = void 0;
const pirate_dialect_1 = require("./dialects/pirate.dialect");
const cop_dialect_1 = require("./dialects/cop.dialect");
class SpeechHandler {
    constructor(dialects) {
        this.dialects = new Map();
        dialects.forEach((dialect) => {
            this.dialects.set(dialect.name, dialect.vocabulary);
        });
    }
    getDialect(dialect) {
        const hasDialect = this.dialects.has(dialect);
        if (hasDialect) {
            return this.dialects.get(dialect);
        }
        return this.dialects.get("Cop");
    }
}
exports.SpeechHandler = SpeechHandler;
exports.speechHandler = new SpeechHandler([pirate_dialect_1.pirateDialect, cop_dialect_1.copDialect]);
//# sourceMappingURL=index.js.map