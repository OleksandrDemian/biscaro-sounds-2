import {Player} from "../../components/Player";
import styles from './index.module.css';
import {SOUNDS_DB} from "../../data/soundsDb";

export const Sounds = () => {
  return (
    <div>
      {SOUNDS_DB.map((category) => (
        <div class={styles.category}>
          <h2>{category.name}</h2>
          {category.sounds.map((sound) => (
            <Player audioPath={sound.path} name={sound.name} />
          ))}
        </div>
      ))}
      <p style={{ "text-align": "center" }}>
        "Avrei bisogno di un biscaro che fa la telecronaca della mia vita, penso BiscaroSounds potrà aiutarmi in questo" Diego
      </p>
    </div>
  )
};
