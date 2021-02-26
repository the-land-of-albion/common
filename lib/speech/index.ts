import {pirateDialect} from "./dialects/pirate.dialect";
import {copDialect} from "./dialects/cop.dialect";

import { Vocabulary } from "./speech.interface";
import { Dialect, DialectKeys, Dialects } from "./dialects.interface";


export class SpeechHandler {
    dialects: Map<DialectKeys, Vocabulary>
    constructor(dialects: Dialect[]){
        this.dialects = new Map<DialectKeys, Vocabulary>();
        dialects.forEach((dialect) => {
            this.dialects.set(dialect.name, dialect.vocabulary);
        })
    }
    getDialect(dialect: DialectKeys){
        const hasDialect = this.dialects.has(dialect);
        if(hasDialect){
            return this.dialects.get(dialect) as Vocabulary;
        }
        return this.dialects.get("Cop") as Vocabulary; 

    }
}

export const speechHandler = new SpeechHandler([pirateDialect, copDialect]);