"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardAtTheGates = void 0;
const npc_1 = require("../../npc");
class GuardAtTheGates extends npc_1.Npc {
    constructor(options) {
        super({
            name: "Guard at the gates",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/avatars/png/005-viking.png",
            primary: "https://raw.githubusercontent.com/the-land-of-albion/static/main/img/viking/png/041-shield-2.png",
            secondary: "https://raw.githubusercontent.com/the-land-of-albion/static/main/img/viking/png/007-cabain.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "RED",
        });
    }
}
exports.GuardAtTheGates = GuardAtTheGates;
//# sourceMappingURL=GuardAtTheGates.npc.js.map