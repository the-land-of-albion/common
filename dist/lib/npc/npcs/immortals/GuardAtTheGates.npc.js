"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardAtTheGates = void 0;
const npc_1 = require("../../npc");
class GuardAtTheGates extends npc_1.Npc {
    constructor(options) {
        super({
            name: "Guard at the gates",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/avatars/png/005-viking.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "RED",
        });
    }
}
exports.GuardAtTheGates = GuardAtTheGates;
//# sourceMappingURL=GuardAtTheGates.npc.js.map