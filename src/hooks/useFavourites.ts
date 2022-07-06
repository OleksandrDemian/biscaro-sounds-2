import {createEffect, createSignal, onCleanup} from "solid-js";
import {listen} from "../utils/favorites";
import {BiscaroSound, SOUNDS_DB} from "../data/soundsDb";

export const useFavourites = () => {
  const [favorites, setFav] = createSignal<BiscaroSound[]>([]);

  createEffect(() => {
    onCleanup(listen({
      onUpdate: (newIds) => {
        console.log('got', newIds);
        const newFav = [];
        for (const category of SOUNDS_DB) {
          for (const sound of category.sounds) {
            if (newIds.includes(sound.path)) {
              newFav.push(sound);
            }
          }
        }
        console.log('new', newFav);
        setFav(newFav);
      },
    }));
  });
  return favorites;
};
