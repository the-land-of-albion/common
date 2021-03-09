import{ Options } from "./lib/Options";
import { OptionsBuilder } from "./lib/OptionBuilder";
import { speechHandler } from "./lib/speech";
// import {Dialects} from "./lib/speech/dialects.interface";
import {Titles} from "./lib/titles"

const botHavenSpeech = speechHandler;

export {Options, OptionsBuilder, botHavenSpeech, Titles};