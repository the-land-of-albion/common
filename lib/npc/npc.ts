import { ColorResolvable, MessageEmbed } from "discord.js";

/**
 * TalkOptions
 * @typedef {Object} TalkOptions
 * @property {string} description
 * @property {string} title
 */
export type baseEmbedType = "DEFAULT" | "FULL" | "PRIMARY" | "SECONDARY";
export class Npc {
  name: string;
  avatar: string;
  description?: string;
  color: ColorResolvable;
  primary?: string;
  secondary?: string;
  constructor(options: {
    name: string;
    avatar: string;
    description?: string;
    color?: ColorResolvable;
    primary?: string;
    secondary?: string;
  }) {
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
  private generateBaseEmbed(type: baseEmbedType) {
    /* Helper */

    const embed = new MessageEmbed()
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

  think(options: {
    description?: string;
    title?: string;
    embedBaseType?: baseEmbedType;
  }): MessageEmbed {
    const { description, title, embedBaseType: type } = options;

    const TalkEmbed = this.generateBaseEmbed(type || "DEFAULT");
    title && TalkEmbed.setTitle(title);
    description && TalkEmbed.setDescription(description);

    return TalkEmbed;
  }
}
