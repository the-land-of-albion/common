"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Npc = void 0;
const discord_js_1 = require("discord.js");
/**
 * TalkOptions
 * @typedef {Object} TalkOptions
 * @property {string} description
 * @property {string} title
 */
class Npc {
    constructor(options) {
        const { name, avatar, color, description } = options;
        this.name = name;
        this.avatar = avatar;
        this.color = color || "BLUE";
        description && (this.description = description);
    }
    /**
     * Generates Base Npc MessageEmbed.
     *
     * You can choose between type "DEFAULT" & "OTHER".
     * @param {"DEFAULT" | "OTHER"} type
     * @returns {MessageEmbed}
     */
    generateBaseEmbed(type) {
        /* Helper */
        function createDefaultEmbed(that) {
            return embed.setAuthor(that.name, that.avatar)
                .setColor(that.color)
                .setTimestamp();
        }
        /* Handle "type" */
        let embed = new discord_js_1.MessageEmbed();
        switch (type) {
            case "OTHER":
                embed.setAuthor(this.name, this.avatar)
                    .setColor(this.color)
                    .setTimestamp();
                break;
            case "DEFAULT":
                embed = createDefaultEmbed(this);
            default:
                break;
        }
        return embed;
    }
    think(options) {
        const { description, title, embedBaseType: type } = options;
        const TalkEmbed = this.generateBaseEmbed(type || "DEFAULT");
        title && TalkEmbed.setTitle(title);
        description && TalkEmbed.setDescription(description);
        return TalkEmbed;
    }
}
exports.Npc = Npc;
//# sourceMappingURL=npc.js.map