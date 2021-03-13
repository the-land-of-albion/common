import { NpcMortal } from "../../mortal";

export class CelticWarrior extends NpcMortal {
  constructor() {
    super(
      {
        name: "Celtic Warrior",
        avatar:
          "https://raw.githubusercontent.com/BotHaven/static/main/img/celtic/png/008-warrior.png",
        color: "GREEN",
      },
      { health: 100, defense: 1, attack: 12.5 }
    );
  }
}
