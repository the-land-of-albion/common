export enum Cities {
    "ALDOURMIL",
    "ELESRITH",
    "STRAASHIRE"
}
export type CityKeys = keyof typeof Cities;

export class City {
    name: CityKeys;
    emojiName: string;
    passages: Map<CityKeys, City>;
    roleId: string;
    constructor(options: {name: CityKeys, emojiName?: string, passages: City[], roleId: string}){
        const {name, passages, emojiName, roleId} = options;
        this.name = name;
        this.emojiName = emojiName || "one";
        this.roleId = roleId;
        this.passages = new Map<CityKeys, City>(); 
        passages.forEach((p) => this.passages.set(p.name, p));
    }
}
