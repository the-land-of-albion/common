"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const pirateTalk = _1.botHavenSpeech.getDialect("Pirate");
const optionsBuilder = new _1.OptionsBuilder();
// Create game
// optionsBuilder.fetch("http://localhost:3000/user/pete/game", "POST", { body: { title: "paisho", _title: "paisho" }})
//     .then((res) => res.json())
//     .then(console.log)
// Invite captain
// optionsBuilder.fetch("http://localhost:3000/user/pete/game/paisho/invite", "PUT", {body: {user: "captain"}})
// .then((res) => res.json())
// .then(console.log)
// optionsBuilder.fetch("http://localhost:3000/user/peter", "GET")
//     .then((res) => res.json())
//     .then(console.log)
// console.log(Titles)
const LordHewelet = new _1.npcs.bots.LordHewelet();
const LordHelyes = new _1.npcs.bots.LordHelyes();
const LordBrom = new _1.npcs.bots.LordBrom();
const Killgarah = new _1.npcs.bots.LordBrom();
const Emerus = new _1.npcs.bots.Emerus();
console.log(LordHelyes, LordHewelet, LordBrom, Emerus, Killgarah);
//# sourceMappingURL=test.js.map