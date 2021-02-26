"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pirateDialect = void 0;
const dialects_interface_1 = require("../dialects.interface");
const piratePromptingVocabulary = {
    start: () => `temp`,
    ended: () => `temp`,
    timeout: () => `temp`,
    retry: () => `temp`,
    cancel: () => `temp`,
};
const pirateCommandVocabulary = {
    authRegisterComplete: () => `temp`,
    authRegisterFail: () => `temp`,
    profileBioGetComplete: () => `temp`,
    profileBioGetFailed: () => `temp`,
    profileBioSetComplete: () => `temp`,
    profileBioSetFailed: () => `temp`,
    unknown: () => `temp`,
};
const pirateVocabulary = Object.assign(Object.assign({}, piratePromptingVocabulary), pirateCommandVocabulary);
exports.pirateDialect = new dialects_interface_1.Dialect(dialects_interface_1.Dialects.Pirate, pirateVocabulary);
//# sourceMappingURL=pirate.dialect.js.map