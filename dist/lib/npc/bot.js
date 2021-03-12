"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcBot = void 0;
const npc_1 = require("./npc");
class NpcBot extends npc_1.Npc {
    constructor(npc, options) {
        super(npc);
        const { categoryIds, channelIds, prefix } = options;
        this.categoryIds = categoryIds || [];
        this.channelIds = channelIds || [];
        this.prefix = prefix;
    }
    canSendMessage(message) {
        if (!this.categoryIds.length && !this.channelIds.length)
            return true;
        const inValidCategory = this.categoryIds.some((catId) => {
            var _a;
            const c = message.channel;
            return ((_a = c.parent) === null || _a === void 0 ? void 0 : _a.id) === catId;
        });
        if (inValidCategory)
            return true;
        const isValidChannel = this.channelIds.some((chaId) => message.channel.id === chaId);
        return isValidChannel;
    }
    speak(message, options) {
        if (!this.canSendMessage(message))
            throw new Error("cannot speak in this channel");
        return this.think(options);
    }
}
exports.NpcBot = NpcBot;
//# sourceMappingURL=bot.js.map