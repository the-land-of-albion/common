import {Vocabulary} from "./speech.interface";

export class Dialect {
    name: DialectKeys;
    vocabulary: Vocabulary;
    constructor(name: DialectKeys, vocabulary: Vocabulary) {
        this.name = name;
        this.vocabulary = vocabulary;
    }
}
export enum Dialects{
    "Pirate" = "Pirate", 
    "Cop" = "Cop"
}
export type DialectKeys = keyof typeof Dialects;