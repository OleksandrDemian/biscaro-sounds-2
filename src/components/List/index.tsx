import {JSXElement} from "solid-js";
import styles from './index.module.css';

export type ListProps = {
  children: JSXElement;
};
export const List = (props: ListProps) => (
  <div class={styles.list}>
    {props.children}
  </div>
)