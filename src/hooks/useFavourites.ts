import {createEffect, createSignal, onCleanup} from "solid-js";
import {listen} from "../data/favoritesDb";
import {Sound, getSoundById} from "../data/soundsDb";

export const useFavourites = () => {
  const [favorites, setFav] = createSignal<Sound[]>([]);

  createEffect(() => {
    onCleanup(listen({
      onUpdate: (newIds) => {
        console.log('New ids', newIds)
        const newFav: Sound[] = [];
        newIds.forEach((newId) => {
          const sound = getSoundById(newId);
          console.log('Got sound', newId, sound);
          if (sound) {
            newFav.push(sound);
          }
        });
        setFav(newFav);
      },
    }));
  });
  return favorites;
};
