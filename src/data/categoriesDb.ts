export type Category = {
  id: string;
  name: string;
  description: string;
};
const CATEGORIES_DB: Category[] = [
  {
    id: 'bangers',
    name: "🧨 Bangers™",
    description: 'La storia',
  },
  {
    id: 'classics',
    name: '🦄 Classics™',
    description: 'I migliori audio presi dai corsi su YouTube',
  },
];

export const getCategories = () => [...CATEGORIES_DB];
export const getCategoryById = (categoryId: string) => CATEGORIES_DB.find((entry) => entry.id === categoryId);
