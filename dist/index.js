"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcMortal = exports.NpcBot = exports.Npc = exports.npcs = exports.Titles = exports.botHavenSpeech = exports.OptionsBuilder = exports.Options = void 0;
const Options_1 = require("./lib/Options");
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return Options_1.Options; } });
const OptionBuilder_1 = require("./lib/OptionBuilder");
Object.defineProperty(exports, "OptionsBuilder", { enumerable: true, get: function () { return OptionBuilder_1.OptionsBuilder; } });
const speech_1 = require("./lib/speech");
// import {Dialects} from "./lib/speech/dialects.interface";
const titles_1 = require("./lib/titles");
Object.defineProperty(exports, "Titles", { enumerable: true, get: function () { return titles_1.Titles; } });
const botHavenSpeech = speech_1.speechHandler;
exports.botHavenSpeech = botHavenSpeech;
var npc_1 = require("./lib/npc");
Object.defineProperty(exports, "npcs", { enumerable: true, get: function () { return npc_1.npcs; } });
Object.defineProperty(exports, "Npc", { enumerable: true, get: function () { return npc_1.Npc; } });
Object.defineProperty(exports, "NpcBot", { enumerable: true, get: function () { return npc_1.NpcBot; } });
Object.defineProperty(exports, "NpcMortal", { enumerable: true, get: function () { return npc_1.NpcMortal; } });
//# sourceMappingURL=index.js.map