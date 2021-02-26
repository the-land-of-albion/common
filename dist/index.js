"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botHavenSpeech = exports.OptionsBuilder = exports.Options = void 0;
const Options_1 = require("./lib/Options");
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return Options_1.Options; } });
const OptionBuilder_1 = require("./lib/OptionBuilder");
Object.defineProperty(exports, "OptionsBuilder", { enumerable: true, get: function () { return OptionBuilder_1.OptionsBuilder; } });
const speech_1 = require("./lib/speech");
const botHavenSpeech = speech_1.speechHandler;
exports.botHavenSpeech = botHavenSpeech;
//# sourceMappingURL=index.js.map