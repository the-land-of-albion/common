"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsBuilder = void 0;
const Options_1 = require("./Options");
const node_fetch_1 = require("node-fetch");
class OptionsBuilder {
    constructor() {
        this.headers = {
            "Authorization": "Bearer " + "mypassword",
            "Content-Type": "application/json",
            "Accepts": "application/json",
            "credentials": "include",
            "User-Agent": "discord / node-fetch"
        };
        this.fetch = this.fetch.bind(this);
    }
    withHeaders(headers) {
        this.headers = Object.assign(Object.assign({}, this.headers), headers);
        return this;
    }
    fetch(url, req, optionals) {
        const usedHeaders = Object.assign(Object.assign({}, this.headers), optionals === null || optionals === void 0 ? void 0 : optionals.headers);
        // console.log("usedHeaders:",usedHeaders)
        const builderOptionals = { body: optionals === null || optionals === void 0 ? void 0 : optionals.body, headers: usedHeaders };
        // console.log("builderOptionals",builderOptionals);
        const options = new Options_1.Options(req, builderOptionals).transform();
        // console.log("options",options);
        return node_fetch_1.default(url, options);
    }
}
exports.OptionsBuilder = OptionsBuilder;
exports.default = OptionsBuilder;
//# sourceMappingURL=OptionBuilder.js.map