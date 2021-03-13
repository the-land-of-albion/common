import { ColorResolvable } from "discord.js";
import { NpcBot } from "../../bot";

export class Killgarah extends NpcBot {
  constructor(options?: {
    color?: ColorResolvable;
    channelIds?: string[];
    categoryIds?: string[];
  }) {
    super(
      {
        name: "Killgarah",
        description:
          "Your guiding dragon. Call for him in times of need, where you need help.",
        avatar:
          "https://raw.githubusercontent.com/BotHaven/static/main/img/fantastic-characters/png/042-dragon.png",
        color: options?.color || "GOLD",
      },
      {
        prefix: ["!dragon", "?dragon"],
        channelIds: options?.channelIds,
        categoryIds: options?.categoryIds,
  
      }
    );
  }
}

// TODO add description to NpcBot
