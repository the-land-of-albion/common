import { CommandVocabulary, PromptingVocabulary } from "../speech.interface";
import { Dialect, Dialects } from "../dialects.interface";

const copPromptingVocabulary: PromptingVocabulary = {
  start: (bio: string) => `Go ahead! I see you haven't even written your \`${bio}\` yet. I want that report in the **input bar** 5 minutes ago!`,
  ended: () => `It was a pleasure working with you chief.`,
  timeout: () => `You know what, since you didn't complete this in time, I will let you off with a warning.`,
  retry: () => `You get another shot detective. Make it count.`,
  cancel: () => `I am in incredible pain right now.`,
};
const copCommandVocabulary: CommandVocabulary = {
  authRegisterComplete: () => `🛰️ Finished Sir!`,
  authRegisterFail: () => `🚨 News Sir! Can't do that.`,
  profileBioGetComplete: () => `Just read over it. Impressive!`,
  profileBioGetFailed: () => `I can't find your files!`,
  profileBioSetComplete: () => `It was time for a change`,
  profileBioSetFailed: () => `You can't publish that! There is a typo.`,
  unknown: () => `Sir, you wanted to see me.`,
};

const copVocabulary = { ...copPromptingVocabulary, ...copCommandVocabulary };
export const copDialect = new Dialect(Dialects.Cop, copVocabulary);
