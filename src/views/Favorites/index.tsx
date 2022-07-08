import {useFavourites} from "../../hooks/useFavourites";
import {Player} from "../../components/Player";
import {List} from "../../components/List";
import {For} from "solid-js";

export const Favorites = () => {
  const favorites = useFavourites();

  return (
    <List>
      {favorites().length < 1 ? (
        <h2>Niente favoriti</h2>
      ) : (
        <For each={favorites()}>
          {(sound) => (
            <Player {...sound} />
          )}
        </For>
      )}
    </List>
  )
};
