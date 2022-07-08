import alloraSound from '../assets/audio/allora.mp3';
import cesSound from '../assets/audio/ces.mp3';
import ciSound from '../assets/audio/ci.mp3';
import ciaoSound from '../assets/audio/ciao.mp3';
import eSound from '../assets/audio/e.mp3';
import eqSound from '../assets/audio/eq.mp3';
import ipiivduvSound from '../assets/audio/ipiivduv.mp3';
import iudpfdeuSound from '../assets/audio/iudpfdeu.mp3';
import mtpevevaSound from '../assets/audio/mtpeveva.mp3';
import netqaaSound from '../assets/audio/netqaa.mp3';
import proviamoSound from '../assets/audio/proviamo.mp3';
import qqSound from '../assets/audio/qq.mp3';
import quindiSound from '../assets/audio/quindi.mp3';
import ueSound from '../assets/audio/ue.mp3';
import uicSound from '../assets/audio/uic.mp3';
import uuapSound from '../assets/audio/uuap.mp3';
import uvvbptSound from '../assets/audio/uvvbpt.mp3';
import vediamoSound from '../assets/audio/vediamo.mp3';

import Agghiacciante from '../assets/audio/wa/Agghiacciante.ogg';
import Applause from '../assets/audio/wa/Applause.ogg';
import Ce_labbiamo_fatta from '../assets/audio/wa/Ce labbiamo fatta.ogg';
import Complotto from '../assets/audio/wa/Complotto.ogg';
import Cri_cri from '../assets/audio/wa/Cri cri.ogg';
import Dai_che_si_parte from '../assets/audio/wa/Dai che si parte.aac';
import Hai_paura from '../assets/audio/wa/Hai paura.ogg';
import Musichetta_1 from '../assets/audio/wa/Musichetta 1.ogg';
import Pazzesco from '../assets/audio/wa/Pazzesco.ogg';
import Per_PHP_ripassare_JSP from '../assets/audio/wa/Per PHP ripassare JSP.ogg';
import Pronotato from '../assets/audio/wa/Pronotato.ogg';
import Pronti_alla_routine from '../assets/audio/wa/Pronti alla routine.ogg';
import Stronger from '../assets/audio/wa/Stronger.ogg';
import Wassim from '../assets/audio/wa/Wassim.ogg';

export type Sound = {
  name: string;
  path: string;
  id: string;
};

const SOUNDS_DB: Sound[] = [
  { id: "alloraSound", name: 'Allora', path: alloraSound },
  { id: "cesSound", name: 'Cosa è successo?', path: cesSound },
  { id: "ciSound", name: 'Copia incolla', path: ciSound },
  { id: "ciaoSound", name: 'Ciao', path: ciaoSound },
  { id: "eSound", name: 'E', path: eSound },
  { id: "eqSound", name: 'Eccolo qua', path: eqSound },
  { id: "ipiivduvSound", name: 'Il ++ incrementa il valore di una variabile', path: ipiivduvSound },
  { id: "iudpfdeuSound", name: 'Il problema fondamentale del essere umano', path: iudpfdeuSound },
  { id: "mtpevevaSound", name: 'Tra puntatori e vettori è un vero amore?', path: mtpevevaSound },
  { id: "netqaaSound", name: 'Affascinante', path: netqaaSound },
  { id: "proviamoSound", name: 'Proviamo', path: proviamoSound },
  { id: "qqSound", name: 'Questo qui', path: qqSound },
  { id: "quindiSound", name: 'Quindi', path: quindiSound },
  { id: "ueSound", name: 'Un endl', path: ueSound },
  { id: "uicSound", name: 'cout', path: uicSound },
  { id: "uuapSound", name: 'Arma potentisssssima', path: uuapSound },
  { id: "uvvbptSound", name: 'Video brutti per tutti', path: uvvbptSound },
  { id: "vediamoSound", name: 'Vediamo', path: vediamoSound },
  { id: "Agghiacciante", name: 'Agghiacciante', path: Agghiacciante },
  { id: "Applause", name: 'Applause', path: Applause },
  { id: "Ce_labbiamo_fatta", name: 'Ce labbiamo fatta', path: Ce_labbiamo_fatta },
  { id: "Complotto", name: 'Complotto', path: Complotto },
  { id: "Cri_cri", name: 'Cri cri', path: Cri_cri },
  { id: "Dai_che_si_parte", name: 'Dai che si parte', path: Dai_che_si_parte },
  { id: "Hai_paura", name: 'Hai paura', path: Hai_paura },
  { id: "Musichetta_1", name: 'Musichetta 1', path: Musichetta_1 },
  { id: "Pazzesco", name: 'Pazzesco', path: Pazzesco },
  { id: "Per_PHP_ripassare_JSP", name: 'Per PHP ripassare JSP', path: Per_PHP_ripassare_JSP },
  { id: "Pronotato", name: 'Pronotato', path: Pronotato },
  { id: "Pronti_alla_routine", name: 'Pronti alla routine', path: Pronti_alla_routine },
  { id: "Stronger", name: 'Stronger', path: Stronger },
  { id: "Wassim", name: 'Wassim', path: Wassim },
];

export const getSounds = () => SOUNDS_DB;

export const getSoundById = (soundId: string) => SOUNDS_DB.find((entry) => entry.id === soundId);

export type SearchSoundsProps = {
  query: string;
}
export const searchSounds = ({ query }: SearchSoundsProps) => {
  const lowerQuery = query.toLowerCase();
  return SOUNDS_DB.filter((entry) => entry.name.toLowerCase().includes(lowerQuery));
};
