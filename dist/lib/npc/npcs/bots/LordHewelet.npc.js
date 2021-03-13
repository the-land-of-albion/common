"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LordHewelet = void 0;
const bot_1 = require("../../bot");
//export const LordHewelet = new NpcBot({name: "Lord Hewelet", avatar: "", color: "RED"}, {prefix: "!auth"})
class LordHewelet extends bot_1.NpcBot {
    constructor(options) {
        super({
            name: "Lord Hewelet",
            description: "User manager.",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/three-wise-men/melchor.png",
            color: (options === null || options === void 0 ? void 0 : options.color) || "ORANGE",
        }, { prefix: ["!auth", "?auth"], categoryIds: options === null || options === void 0 ? void 0 : options.categoryIds,
            channelIds: options === null || options === void 0 ? void 0 : options.channelIds,
        });
    }
}
exports.LordHewelet = LordHewelet;
//# sourceMappingURL=LordHewelet.npc.js.map