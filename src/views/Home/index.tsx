import {SOUNDS_DB} from "../../data/soundsDb";
import {Link} from "solid-app-router";
import styles from "./index.module.css";

export const Home = () => {
  return (
    <>
      <Link class={styles.categoryLink} href={`/favorites`}>
        <h2 class={styles.header}>⭐ Favorites</h2>
        <p class={styles.paragraph}>I miei preferiti</p>
      </Link>
      {SOUNDS_DB.map((sound) => (
        <Link class={styles.categoryLink} href={`/category/${sound.id}`}>
          <h2 class={styles.header}>{sound.name}</h2>
          <p class={styles.paragraph}>{sound.description}</p>
        </Link>
      ))}
    </>
  )
};
