import {createMemo} from "solid-js";
import {SOUNDS_DB} from "../data/soundsDb";

export const useCategory = (id: string) => {
  const category = createMemo(() => {
    return SOUNDS_DB.find((category) => category.id === id);
  });

  return category();
};
