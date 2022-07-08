import {JSXElement} from "solid-js";
import styles from './index.module.css';
import {clist} from "../../utils/clist";

export type ListProps = {
  children: JSXElement;
  class?: string;
};
export const List = (props: ListProps) => (
  <div class={clist(styles.list, props.class)}>
    {props.children}
  </div>
)