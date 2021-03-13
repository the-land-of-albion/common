"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LordHelyes = void 0;
const bot_1 = require("../../bot");
class LordHelyes extends bot_1.NpcBot {
    constructor(options) {
        super({
            name: "Lord Helyes",
            description: "Score manager.",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/three-wise-men/gaspar.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "BLUE",
        }, {
            prefix: ["!sb", "?sb"],
            categoryIds: options === null || options === void 0 ? void 0 : options.categoryIds,
            channelIds: options === null || options === void 0 ? void 0 : options.channelIds,
        });
    }
}
exports.LordHelyes = LordHelyes;
//# sourceMappingURL=LordHelyes.npc.js.map