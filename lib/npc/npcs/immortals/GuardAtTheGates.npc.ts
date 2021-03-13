import { ColorResolvable } from "discord.js";
import { Npc } from "../../npc";

export class GuardAtTheGates extends Npc {
  constructor(options?: { color: ColorResolvable }) {
    super({
      name: "Guard at the gates",
      avatar:
        "https://raw.githubusercontent.com/BotHaven/static/main/img/avatars/png/005-viking.png",
      color: options?.color || "RED",
    });
  }
}
