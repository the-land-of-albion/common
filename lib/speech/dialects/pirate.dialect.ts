import { Dialect, Dialects } from "../dialects.interface";
import { CommandVocabulary, PromptingVocabulary } from "../speech.interface";

const piratePromptingVocabulary: PromptingVocabulary = {
  start: () => `temp`,
  ended: () => `temp`,
  timeout: () => `temp`,
  retry: () => `temp`,
  cancel: () => `temp`,
};
const pirateCommandVocabulary: CommandVocabulary = {
  authRegisterComplete: () => `temp`,
  authRegisterFail: () => `temp`,
  profileBioGetComplete: () => `temp`,
  profileBioGetFailed: () => `temp`,
  profileBioSetComplete: () => `temp`,
  profileBioSetFailed: () => `temp`,
  unknown: () => `temp`,
};

const pirateVocabulary = {
  ...piratePromptingVocabulary,
  ...pirateCommandVocabulary,
};
export const pirateDialect = new Dialect(Dialects.Pirate, pirateVocabulary);
