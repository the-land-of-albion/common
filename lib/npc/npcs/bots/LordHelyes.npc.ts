import { ColorResolvable } from "discord.js";
import { NpcBot } from "../../bot";

export class LordHelyes extends NpcBot {
  constructor(options?: {
    color?: ColorResolvable;
    categoryIds?: string[];
    channelIds?: string[];
  }) {
    super(
      {
        name: "Lord Helyes",
        description: "Score manager.",
        avatar:
          "https://raw.githubusercontent.com/BotHaven/static/main/img/three-wise-men/gaspar.png",
        color: options?.color || "BLUE",
      },
      {
        prefix: ["!sb", "?sb"],
        categoryIds: options?.categoryIds,
        channelIds: options?.channelIds,
      }
    );
  }
}
