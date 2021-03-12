"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcMortal = void 0;
const npc_1 = require("./npc");
class NpcMortal extends npc_1.Npc {
    constructor(npc, mortality) {
        const { health, defense, attack } = mortality;
        super(npc);
        this.health = health;
        this.defense = defense;
        this.attack = attack;
        this.inventory = [];
    }
}
exports.NpcMortal = NpcMortal;
//# sourceMappingURL=mortal.js.map