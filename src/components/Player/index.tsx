import styles from './index.module.css';
import StartIcon from '../../assets/icons/star.svg';
import EmptyStartIcon from '../../assets/icons/empty-star.svg';
import {AudioManager} from "../../utils/audioManager";
import {slist} from "../../utils/slist";
import {useIsFavorite} from "../../hooks/useIsFavorite";
import {addFavorite, removeFavorite} from "../../data/favoritesDb";
import {Sound} from "../../data/soundsDb";

export const Player = (props: Sound) => {
  const { isFavorite } = useIsFavorite(props.id);
  const onPlay = () => AudioManager.play(props.path);

  const onStar = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addFavorite(props.id);
  };

  const onUnstar = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeFavorite(props.id);
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
