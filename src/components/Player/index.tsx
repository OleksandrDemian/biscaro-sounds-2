import styles from './index.module.css';
import PlayIcon from '../../assets/icons/play.svg';
import {AudioManager} from "../../utils/audioManager";

export type PlayerProps = {
  audioPath: string;
  name: string;
};
export const Player = ({ name, audioPath }: PlayerProps) => {
  const onClick = () => AudioManager.play(audioPath);

  return (
    <div class={styles.container} onClick={onClick}>
      <div>
        {name}
      </div>
      <div class={styles.playButton}>
        <PlayIcon />
      </div>
    </div>
  )
};
