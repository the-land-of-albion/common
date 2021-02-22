"use strict";
exports.__esModule = true;
var Requests;
(function (Requests) {
    Requests[Requests["GET"] = 0] = "GET";
    Requests[Requests["POST"] = 1] = "POST";
    Requests[Requests["PUT"] = 2] = "PUT";
    Requests[Requests["PATCH"] = 3] = "PATCH";
    Requests[Requests["DELETE"] = 4] = "DELETE";
})(Requests || (Requests = {}));
var Options = /** @class */ (function () {
    function Options(request, body, headers) {
        this.request = request;
        this.body = body || null;
        this.headers = headers || Options.fallbackOptions;
        this.transform();
    }
    Options.prototype.transform = function () {
        if (this.body) {
            return {
                method: this.request,
                body: JSON.stringify(this.body),
                headers: this.headers
            };
        }
        else {
            return {
                method: this.request,
                headers: this.headers
            };
        }
    };
    Options.fallbackOptions = {
        "Authorization": "Bearer " + "mypassword",
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "credentials": "include",
        "User-Agent": "discord / node-fetch"
    };
    return Options;
}());
exports["default"] = Options;
