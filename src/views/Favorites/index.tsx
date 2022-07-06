import {useFavourites} from "../../hooks/useFavourites";
import {Player} from "../../components/Player";
import {List} from "../../components/List";
import {createEffect, For} from "solid-js";

export const Favorites = () => {
  const favorites = useFavourites();

  createEffect(() => {
    console.log('r', favorites())
  })
  return (
    <List>
      {favorites().length < 1 ? (
        <h2>Niente favoriti</h2>
      ) : (
        <For each={favorites()}>
          {(sound) => (
            <Player audioPath={sound.path} name={sound.name} />
          )}
        </For>
      )}
    </List>
  )
};
