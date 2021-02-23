"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsBuilder = void 0;
const Options_1 = require("./Options");
const node_fetch_1 = require("node-fetch");
class OptionsBuilder {
    constructor(headers) {
        this.headers = headers || {};
    }
    withHeaders(headers) {
        this.headers = headers;
        return this;
    }
    build(url, req, optionals) {
        const usedHeaders = Object.assign(Object.assign({}, this.headers), optionals === null || optionals === void 0 ? void 0 : optionals.headers);
        const builderOptionals = { optionals: optionals === null || optionals === void 0 ? void 0 : optionals.body, headers: usedHeaders };
        return node_fetch_1.default(url, new Options_1.Options(req, builderOptionals));
    }
}
exports.OptionsBuilder = OptionsBuilder;
exports.default = OptionsBuilder;
//# sourceMappingURL=OptionBuilder.js.map