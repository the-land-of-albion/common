import { Npc } from "../../npc";

export class BigManInFrontOfYou extends Npc {
  constructor() {
    super({
      name: "Big Man In Front Of You",
      avatar:
        "https://raw.githubusercontent.com/the-land-of-albion/static/main/img/viking/png/029-viking.png",
      primary:
        "https://raw.githubusercontent.com/the-land-of-albion/static/main/img/viking/png/041-shield-2.png",
      secondary:
        "https://raw.githubusercontent.com/the-land-of-albion/static/main/img/viking/png/019-axes.png",
      color: "RED",
    });
  }
}
