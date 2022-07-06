import styles from './index.module.css';
import StartIcon from '../../assets/icons/star.svg';
import EmptyStartIcon from '../../assets/icons/empty-star.svg';
import {AudioManager} from "../../utils/audioManager";
import {slist} from "../../utils/slist";
import {useIsFavorite} from "../../hooks/useIsFavorite";
import {addFavorite, removeFavorite} from "../../utils/favorites";

export type PlayerProps = {
  audioPath: string;
  name: string;
};
export const Player = (props: PlayerProps) => {
  const { isFavorite } = useIsFavorite(props.audioPath);
  const onPlay = () => AudioManager.play(props.audioPath);

  const onStar = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addFavorite(props.audioPath);
  };

  const onUnstar = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeFavorite(props.audioPath);
  }

  return (
    <div class={styles.container} onClick={onPlay}>
      <div>
        {props.name}
      </div>
      <div class={styles.buttons}>
        {isFavorite() ? (
          <div class={slist(styles.iconButton, styles.starButton)} onClick={onUnstar}>
            <StartIcon />
          </div>
        ) : (
          <div class={slist(styles.iconButton, styles.emptyStarButton)} onClick={onStar}>
            <EmptyStartIcon />
          </div>
        )}
      </div>
    </div>
  )
};
