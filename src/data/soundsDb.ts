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

export type BiscaroSoundsCategory = {
  id: string;
  name: string;
  sounds: BiscaroSound[];
};

export type BiscaroSound = {
  name: string;
  path: string;
};

export const SOUNDS_DB: BiscaroSoundsCategory[] = [
  {
    id: 'hidden_gems',
    name: "🧨 Bangers ™",
    sounds: [
      { name: 'Agghiacciante', path: Agghiacciante },
      { name: 'Applause', path: Applause },
      { name: 'Ce labbiamo fatta', path: Ce_labbiamo_fatta },
      { name: 'Complotto', path: Complotto },
      { name: 'Cri cri', path: Cri_cri },
      { name: 'Dai che si parte', path: Dai_che_si_parte },
      { name: 'Hai paura', path: Hai_paura },
      { name: 'Musichetta 1', path: Musichetta_1 },
      { name: 'Pazzesco', path: Pazzesco },
      { name: 'Per PHP ripassare JSP', path: Per_PHP_ripassare_JSP },
      { name: 'Pronotato', path: Pronotato },
      { name: 'Pronti alla routine', path: Pronti_alla_routine },
      { name: 'Stronger', path: Stronger },
      { name: 'Wassim', path: Wassim },
    ]
  },
  {
    id: 'classics',
    name: '🦄 Classics ™',
    sounds: [
      { name: 'Allora', path: alloraSound },
      { name: 'Cosa è successo?', path: cesSound },
      { name: 'Copia incolla', path: ciSound },
      { name: 'Ciao', path: ciaoSound },
      { name: 'E', path: eSound },
      { name: 'Eccolo qua', path: eqSound },
      { name: 'Il ++ incrementa il valore di una variabile', path: ipiivduvSound },
      { name: 'Il problema fondamentale del essere umano', path: iudpfdeuSound },
      { name: 'Tra puntatori e vettori è un vero amore?', path: mtpevevaSound },
      { name: 'Affascinante', path: netqaaSound },
      { name: 'Proviamo', path: proviamoSound },
      { name: 'Questo qui', path: qqSound },
      { name: 'Quindi', path: quindiSound },
      { name: 'Un endl', path: ueSound },
      { name: 'cout', path: uicSound },
      { name: 'Arma potentisssssima', path: uuapSound },
      { name: 'Video brutti per tutti', path: uvvbptSound },
      { name: 'Vediamo', path: vediamoSound },
    ],
  }
];