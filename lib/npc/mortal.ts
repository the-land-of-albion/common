import { ColorResolvable } from "discord.js";
import { Npc } from "./npc";

export class NpcMortal extends Npc {
    health: number;
    defense: number;
    attack: number;
    inventory: [];
    constructor(npc: {name: string, avatar: string, color?: ColorResolvable}, mortality: {health: number, defense: number, attack: number}){
        const {health, defense, attack} = mortality;
        super(npc);
        this.health = health;
        this.defense = defense;
        this.attack = attack;
        this.inventory = [];
    }


}