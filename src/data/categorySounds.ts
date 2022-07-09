import {Sound, getSounds} from "./soundsDb";

export type CategorySound = {
  categoryId: string;
  soundId: string;
};
const CATEGORY_SOUNDS_DB: CategorySound[] = [
  { soundId: "alloraSound", categoryId: "classics" },
  { soundId: "cesSound", categoryId: "classics" },
  { soundId: "ciSound", categoryId: "classics" },
  { soundId: "ciaoSound", categoryId: "classics" },
  { soundId: "eSound", categoryId: "classics" },
  { soundId: "eqSound", categoryId: "classics" },
  { soundId: "ipiivduvSound", categoryId: "classics" },
  { soundId: "iudpfdeuSound", categoryId: "classics" },
  { soundId: "mtpevevaSound", categoryId: "classics" },
  { soundId: "netqaaSound", categoryId: "classics" },
  { soundId: "proviamoSound", categoryId: "classics" },
  { soundId: "qqSound", categoryId: "classics" },
  { soundId: "quindiSound", categoryId: "classics" },
  { soundId: "ueSound", categoryId: "classics" },
  { soundId: "uicSound", categoryId: "classics" },
  { soundId: "uuapSound", categoryId: "classics" },
  { soundId: "uvvbptSound", categoryId: "classics" },
  { soundId: "vediamoSound", categoryId: "classics" },
  { soundId: "adunata", categoryId: "bangers" },
  { soundId: "Agghiacciante", categoryId: "bangers" },
  { soundId: "Applause", categoryId: "bangers" },
  { soundId: "Ce_labbiamo_fatta", categoryId: "bangers" },
  { soundId: "Complotto", categoryId: "bangers" },
  { soundId: "Cri_cri", categoryId: "bangers" },
  { soundId: "Dai_che_si_parte", categoryId: "bangers" },
  { soundId: "Hai_paura", categoryId: "bangers" },
  { soundId: "Musichetta_1", categoryId: "bangers" },
  { soundId: "Pazzesco", categoryId: "bangers" },
  { soundId: "Per_PHP_ripassare_JSP", categoryId: "bangers" },
  { soundId: "Pronotato", categoryId: "bangers" },
  { soundId: "Pronti_alla_routine", categoryId: "bangers" },
  { soundId: "Stronger", categoryId: "bangers" },
  { soundId: "Wassim", categoryId: "bangers" },
];

export const getSoundsByCategory = (categoryId: string): Sound[] => {
  const temp: Sound[] = [];
  const categorySounds = CATEGORY_SOUNDS_DB.filter((entry) => entry.categoryId === categoryId);
  categorySounds.forEach((entry) => {
    const sound = getSounds().find((soundEntry) => soundEntry.id === entry.soundId);
    if (sound) {
      temp.push(sound);
    }
  });
  return temp;
};
