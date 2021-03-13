import { NpcMortal } from "../../mortal";

export class Dagda extends NpcMortal {
    constructor(){
        super({name: "Dagda", avatar: "https://raw.githubusercontent.com/BotHaven/static/main/img/celtic/png/031-dagda.png", color: "GREEN"}, {
            health: 125, attack: 20, defense: 1.1
        });
    }
}