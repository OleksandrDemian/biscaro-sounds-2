import {Link} from "solid-app-router";
import styles from "./index.module.css";
import { getCategories } from "../../data/categoriesDb";

export const Home = () => {
  const categories = getCategories();

  return (
    <>
      <input placeholder="Cerca suoni" class={styles.search} />
      <Link class={styles.categoryLink} href={`/favorites`}>
        <h2 class={styles.header}>⭐ Favorites</h2>
        <p class={styles.paragraph}>I miei preferiti</p>
      </Link>
      {categories.map((sound) => (
        <Link class={styles.categoryLink} href={`/category/${sound.id}`}>
          <h3 class={styles.header}>{sound.name}</h3>
          <p class={styles.paragraph}>{sound.description}</p>
        </Link>
      ))}
    </>
  )
};
