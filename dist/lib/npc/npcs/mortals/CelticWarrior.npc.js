"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelticWarrior = void 0;
const mortal_1 = require("../../mortal");
class CelticWarrior extends mortal_1.NpcMortal {
    constructor() {
        super({
            name: "Celtic Warrior",
            avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/celtic/png/008-warrior.png",
            color: "GREEN",
        }, { health: 100, defense: 1, attack: 12.5 });
    }
}
exports.CelticWarrior = CelticWarrior;
//# sourceMappingURL=CelticWarrior.npc.js.map