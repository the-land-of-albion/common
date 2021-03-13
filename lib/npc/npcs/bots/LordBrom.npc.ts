import { ColorResolvable } from "discord.js";
import { NpcBot } from "../../bot";

export class LordBrom extends NpcBot {
  constructor(options?: {
    color?: ColorResolvable;
    categoryIds?: string[];
    channelIds?: string[];
  }) {
    super(
      {
        name: "Lord Brom",
        description: "Story teller by heart.",
        avatar:
          "https://raw.githubusercontent.com/BotHaven/static/main/img/three-wise-men/baltazar.png",
        color: options?.color || "RED",
      },
      {
        prefix: ["!room", "?room"],
        categoryIds: options?.categoryIds,
        channelIds: options?.channelIds,
      }
    );
  }
}
