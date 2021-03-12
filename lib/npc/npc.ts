import {ColorResolvable, MessageEmbed} from "discord.js";

/**
 * TalkOptions
 * @typedef {Object} TalkOptions
 * @property {string} description
 * @property {string} title
 */

export class Npc {
    name: string;
    avatar: string;
    color: ColorResolvable;
    constructor(options: {name: string, avatar: string, color?: ColorResolvable}){
        const {name, avatar, color} = options;
        this.name = name;
        this.avatar = avatar;
        this.color = color || "BLUE";
    }

    /**
     * Generates Base Npc MessageEmbed.
     * 
     * You can choose between type "DEFAULT" & "OTHER".
     * @param {"DEFAULT" | "OTHER"} type 
     * @returns {MessageEmbed}
     */
    private generateBaseEmbed(type: "DEFAULT"|"OTHER"){
        /* Helper */
        function createDefaultEmbed(that){
            return  embed.setAuthor(that.name, that.avatar)
                    .setColor(that.color)
                    .setTimestamp()
        }
        /* Handle "type" */
        let embed = new MessageEmbed();
        switch (type) {
            case "OTHER":
                embed.setAuthor(this.name, this.avatar)
                    .setColor(this.color)
                    .setTimestamp()
                break;
            case "DEFAULT":
                embed = createDefaultEmbed(this);
            default:
                break;
        }
        return embed; 
    }

    think(options:{description?: string, title?: string, embedBaseType?: "DEFAULT"|"OTHER"}): MessageEmbed{
        const {description, title, embedBaseType: type} = options;

        const TalkEmbed = this.generateBaseEmbed(type || "DEFAULT")
        title && TalkEmbed.setTitle(title);
        description && TalkEmbed.setDescription(description);
            
        return TalkEmbed;
    }
}

