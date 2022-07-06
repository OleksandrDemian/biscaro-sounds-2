import {isFavorite, listen} from "../utils/favorites";
import {createEffect, createSignal, onCleanup} from "solid-js";

export const useIsFavorite = (id: string) => {
  const [isFav, setIsFav] = createSignal<boolean>(isFavorite(id));
  
  createEffect(() => {
    onCleanup(listen({
      onUpdate: (newIds) => {
        setIsFav(newIds.includes(id));
      },
    }));
  });

  return {
    isFavorite: isFav,
  }
};