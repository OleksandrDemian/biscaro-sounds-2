import styles from './index.module.css';
import {JSXElement} from "solid-js";

export type LayoutProps = {
  children: JSXElement;
};
export const Layout = (props: LayoutProps) => (
  <div class={styles.container}>
    <div class={styles.inner}>
      <h1 class={styles.header}>🐱 BS2❤0.2</h1>
      <p>The sounds of our lives</p>
      <div style={{ flex: 1 }}>
        {props.children}
      </div>
      <p style={{ "text-align": "center" }}>❤</p>
    </div>
  </div>
);
