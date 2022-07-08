import {useParams} from "solid-app-router";
import {useCategory} from "../../hooks/useCategory";
import {Player} from "../../components/Player";
import styles from './index.module.css';
import {List} from "../../components/List";

export type CategoryQueryParams = {
  id: string;
};
export const Category = () => {
  const { id } = useParams<CategoryQueryParams>();
  const category = useCategory(id);

  if (!category) {
    return <h2>Category not found</h2>
  }

  return (
    <List>
      <h2>{category.name}</h2>
      {category.sounds.map((sound) => (
        <Player {...sound} />
      ))}
    </List>
  )
};
