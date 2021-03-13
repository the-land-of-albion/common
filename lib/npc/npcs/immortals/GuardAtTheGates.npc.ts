import { ColorResolvable } from "discord.js";
import { Npc } from "../../npc";

export class GuardAtTheGates extends Npc {
  constructor(options?: { color: ColorResolvable }) {
    super({
      name: "Guard at the gates",
      avatar:
        "https://raw.githubusercontent.com/BotHaven/static/main/img/avatars/png/005-viking.png",
        primary: "https://raw.githubusercontent.com/the-land-of-albion/static/main/img/viking/png/041-shield-2.png",
        secondary: "https://raw.githubusercontent.com/the-land-of-albion/static/main/img/viking/png/007-cabain.png",
      color: options?.color || "RED",
    });
  }
}
