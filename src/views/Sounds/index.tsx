import {Player} from "../../components/Player";
import styles from './index.module.css';

import alloraSound from '../../assets/audio/allora.mp3';
import cesSound from '../../assets/audio/ces.mp3';
import ciSound from '../../assets/audio/ci.mp3';
import ciaoSound from '../../assets/audio/ciao.mp3';
import eSound from '../../assets/audio/e.mp3';
import eqSound from '../../assets/audio/eq.mp3';
import ipiivduvSound from '../../assets/audio/ipiivduv.mp3';
import iudpfdeuSound from '../../assets/audio/iudpfdeu.mp3';
import mtpevevaSound from '../../assets/audio/mtpeveva.mp3';
import netqaaSound from '../../assets/audio/netqaa.mp3';
import proviamoSound from '../../assets/audio/proviamo.mp3';
import qqSound from '../../assets/audio/qq.mp3';
import quindiSound from '../../assets/audio/quindi.mp3';
import ueSound from '../../assets/audio/ue.mp3';
import uicSound from '../../assets/audio/uic.mp3';
import uuapSound from '../../assets/audio/uuap.mp3';
import uvvbptSound from '../../assets/audio/uvvbpt.mp3';
import vediamoSound from '../../assets/audio/vediamo.mp3';

const SOUNDS = [
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
];

export const Sounds = () => {
  return (
    <div class={styles.container}>
      <div class={styles.inner}>
        <h1>BS2.0</h1>
        {SOUNDS.map((sound) => (
          <Player audioPath={sound.path} name={sound.name} />
        ))}
      </div>
    </div>
  )
};
