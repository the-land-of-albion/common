"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dagda = void 0;
const mortal_1 = require("../../mortal");
class Dagda extends mortal_1.NpcMortal {
    constructor() {
        super({ name: "Dagda", avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/celtic/png/031-dagda.png", color: "GREEN" }, {
            health: 125, attack: 20, defense: 1.1
        });
    }
}
exports.Dagda = Dagda;
//# sourceMappingURL=Dagda.npc.js.map