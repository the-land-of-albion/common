"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Killgarah = void 0;
const bot_1 = require("../../bot");
class Killgarah extends bot_1.NpcBot {
    constructor(options) {
        super({
            name: "Killgarah",
            description: "Your guiding dragon. Call for him in times of need, where you need help.",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/fantastic-characters/png/042-dragon.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "GOLD",
        }, {
            prefix: ["!dragon", "?dragon"],
            channelIds: options === null || options === void 0 ? void 0 : options.channelIds,
            categoryIds: options === null || options === void 0 ? void 0 : options.categoryIds,
        });
    }
}
exports.Killgarah = Killgarah;
// TODO add description to NpcBot
//# sourceMappingURL=Killgarah.npc.js.map