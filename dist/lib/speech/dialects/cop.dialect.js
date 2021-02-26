"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copDialect = void 0;
const dialects_interface_1 = require("../dialects.interface");
const copPromptingVocabulary = {
    start: (bio) => `Go ahead! I see you haven't even written your \`${bio}\` yet. I want that report in the **input bar** 5 minutes ago!`,
    ended: () => `It was a pleasure working with you chief.`,
    timeout: () => `You know what, since you didn't complete this in time, I will let you off with a warning.`,
    retry: () => `You get another shot detective. Make it count.`,
    cancel: () => `I am in incredible pain right now.`,
};
const copCommandVocabulary = {
    authRegisterComplete: () => `🛰️ Finished Sir!`,
    authRegisterFail: () => `🚨 News Sir! Can't do that.`,
    profileBioGetComplete: () => `temp`,
    profileBioGetFailed: () => `temp`,
    profileBioSetComplete: () => `temp`,
    profileBioSetFailed: () => `temp`,
    unknown: () => `temp`,
};
const copVocabulary = Object.assign(Object.assign({}, copPromptingVocabulary), copCommandVocabulary);
exports.copDialect = new dialects_interface_1.Dialect(dialects_interface_1.Dialects.Cop, copVocabulary);
//# sourceMappingURL=cop.dialect.js.map