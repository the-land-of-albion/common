"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LordBrom = void 0;
const bot_1 = require("../../bot");
class LordBrom extends bot_1.NpcBot {
    constructor(options) {
        super({
            name: "Lord Brom",
            description: "Story teller by heart.",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/three-wise-men/baltazar.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "RED",
        }, {
            prefix: ["!room", "?room"],
            categoryIds: options === null || options === void 0 ? void 0 : options.categoryIds,
            channelIds: options === null || options === void 0 ? void 0 : options.channelIds,
        });
    }
}
exports.LordBrom = LordBrom;
//# sourceMappingURL=LordBrom.npc.js.map