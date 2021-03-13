"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Npc = void 0;
const discord_js_1 = require("discord.js");
class Npc {
    constructor(options) {
        const { name, avatar, color, description, primary, secondary } = options;
        this.name = name;
        this.avatar = avatar;
        this.color = color || "BLUE";
        description && (this.description = description);
        primary && (this.primary = primary);
        secondary && (this.secondary = secondary);
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
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(this.name, this.avatar)
            .setColor(this.color)
            .setTimestamp();
        /* Handle "type" */
        switch (type) {
            case "FULL":
                this.primary && embed.setThumbnail(this.primary);
                this.secondary && embed.setImage(this.secondary);
                break;
            case "PRIMARY":
                this.primary && embed.setThumbnail(this.primary);
                break;
            case "SECONDARY":
                this.secondary && embed.setImage(this.secondary);
                break;
            case "DEFAULT":
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