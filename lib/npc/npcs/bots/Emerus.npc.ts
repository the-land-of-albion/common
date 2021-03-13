import { ColorResolvable } from "discord.js";
import { NpcBot } from "../../bot";

export class Emerus extends NpcBot {
  constructor(options?: {
    color?: ColorResolvable;
    channelIds?: string[];
    categoryIds?: string[];
  }) {
    super(
      {
        name: "Emerus",
        description: "The High King's right hand. A handyman if you will.",
        avatar:
          "https://raw.githubusercontent.com/BotHaven/static/main/img/wizard.png",
        color: options?.color || "BLURPLE",
      },
      {
        prefix: ["!merlin", "?merlin"],
        categoryIds: options?.categoryIds,
        channelIds: options?.channelIds,
      }
    );
  }
}
