"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsBuilder = void 0;
const Options_1 = require("./Options");
const node_fetch_1 = require("node-fetch");
class OptionsBuilder {
    constructor(headers) {
        this.headers = headers || {
            "Authorization": "Bearer " + "mypassword",
            "Content-Type": "application/json",
            "Accepts": "application/json",
            "credentials": "include",
            "User-Agent": "discord / node-fetch"
        };
    }
    withHeaders(headers) {
        this.headers = Object.assign(Object.assign({}, this.headers), headers);
        return this;
    }
    fetch(url, req, optionals) {
        const usedHeaders = Object.assign(Object.assign({}, this.headers), optionals === null || optionals === void 0 ? void 0 : optionals.headers);
        const builderOptionals = { body: optionals === null || optionals === void 0 ? void 0 : optionals.body, headers: usedHeaders };
        const options = new Options_1.Options(req, builderOptionals).transform();
        console.log(options);
        return node_fetch_1.default(url, options);
    }
}
exports.OptionsBuilder = OptionsBuilder;
exports.default = OptionsBuilder;
//# sourceMappingURL=OptionBuilder.js.map