"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emerus = void 0;
const bot_1 = require("../../bot");
class Emerus extends bot_1.NpcBot {
    constructor(options) {
        super({
            name: "Emerus",
            description: "The High King's right hand. A handyman if you will.",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/wizard.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "BLURPLE",
        }, {
            prefix: ["!merlin", "?merlin"],
            categoryIds: options === null || options === void 0 ? void 0 : options.categoryIds,
            channelIds: options === null || options === void 0 ? void 0 : options.channelIds,
        });
    }
}
exports.Emerus = Emerus;
//# sourceMappingURL=Emerus.npc.js.map