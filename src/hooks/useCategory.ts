import {createMemo} from "solid-js";
import { getCategoryById } from "../data/categoriesDb";
import { getSoundsByCategory } from "../data/categorySounds";

export const useCategory = (id: string) => {
  const category = createMemo(() => {
    const cat = getCategoryById(id);
    return {
      name: cat?.name,
      sounds: getSoundsByCategory(id),
    };
  });

  return category();
};
