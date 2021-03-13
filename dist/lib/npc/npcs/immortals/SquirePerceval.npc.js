"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquirePerceval = void 0;
const npc_1 = require("../../npc");
class SquirePerceval extends npc_1.Npc {
    constructor(options) {
        super({
            name: "Squire Perceval",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/avatars/png/005-viking.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "RED",
        });
    }
}
exports.SquirePerceval = SquirePerceval;
//# sourceMappingURL=SquirePerceval.npc.js.map