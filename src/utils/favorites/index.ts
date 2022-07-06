export type FavoritesListener = {
  onUpdate: (favorites: string[]) => void;
};

const KEY = 'user:favorites';
const favorites: string[] = (() => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      return JSON.parse(saved) as string[];
    }
    return [];
  } catch (e) {
    return [];
  }
})();

const listeners: FavoritesListener[] = [];

export const listen = (l: FavoritesListener) => {
  listeners.push(l);
  l.onUpdate(favorites);
  return () => {
    const index = listeners.indexOf(l);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
};

export const addFavorite = (id: string) => {
  favorites.push(id);
  localStorage.setItem(KEY, JSON.stringify(favorites));
  listeners.forEach((l) => l.onUpdate(favorites));
};

export const removeFavorite = (id: string) => {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem(KEY, JSON.stringify(favorites));
    listeners.forEach((l) => l.onUpdate(favorites));
  }
};

export const isFavorite = (id: string) => favorites.includes(id);
