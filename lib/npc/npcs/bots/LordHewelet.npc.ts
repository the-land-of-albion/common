import { NpcBot } from "../../bot";
import { ColorResolvable } from "discord.js";
//export const LordHewelet = new NpcBot({name: "Lord Hewelet", avatar: "", color: "RED"}, {prefix: "!auth"})

export class LordHewelet extends NpcBot {
  constructor(options?: {
    color?: ColorResolvable;
    categoryIds?: string[];
    channelIds?: string[];
  }) {
    super(
      {
        name: "Lord Hewelet",
        description: "User manager.",
        avatar:
          "https://raw.githubusercontent.com/BotHaven/static/main/img/three-wise-men/melchor.png",
        color: options?.color || "ORANGE",
      },
      { prefix: ["!auth", "?auth"],
        categoryIds: options?.categoryIds,
        channelIds: options?.channelIds,
    }
    );
  }
}
