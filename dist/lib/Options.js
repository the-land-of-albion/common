"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
var Requests;
(function (Requests) {
    Requests[Requests["GET"] = 0] = "GET";
    Requests[Requests["POST"] = 1] = "POST";
    Requests[Requests["PUT"] = 2] = "PUT";
    Requests[Requests["PATCH"] = 3] = "PATCH";
    Requests[Requests["DELETE"] = 4] = "DELETE";
})(Requests || (Requests = {}));
class Options {
    constructor(request, optionals) {
        this.method = request;
        if (optionals === null || optionals === void 0 ? void 0 : optionals.body)
            this.body = optionals.body;
        if (optionals === null || optionals === void 0 ? void 0 : optionals.headers)
            this.headers = optionals.headers;
    }
    transform() {
        if (this.body) {
            return {
                method: this.method,
                body: JSON.stringify(this.body),
                headers: this.headers
            };
        }
        else {
            return {
                method: this.method,
                headers: this.headers
            };
        }
    }
}
exports.Options = Options;
Options.fallbackOptions = {
    "Authorization": "Bearer " + "mypassword",
    "Content-Type": "application/json",
    "Accepts": "application/json",
    "credentials": "include",
    "User-Agent": "discord / node-fetch"
};
exports.default = Options;
//# sourceMappingURL=Options.js.map