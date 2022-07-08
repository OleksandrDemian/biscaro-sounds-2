import {Link} from "solid-app-router";
import styles from "./index.module.css";
import { getCategories } from "../../data/categoriesDb";
import {createSignal} from "solid-js";
import {SoundsFilteredList} from "../../components/SoundsFilteredList";

export const Home = () => {
  const categories = getCategories();
  const [searchSound, setSearchSound] = createSignal<string>('');

  return (
    <>
      <div class={styles.searchBar}>
        <input
          placeholder="Cerca suoni"
          class={styles.search}
          onInput={(e) => setSearchSound(e.currentTarget.value)}
          value={searchSound()}
        />
        <button
          onClick={() => setSearchSound('')}
          class={styles.cancelSearch}
        >
          X
        </button>
      </div>
      {searchSound().length > 0 ? (
        <SoundsFilteredList query={searchSound()} />
      ) : (
        <>
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
      )}
    </>
  )
};
