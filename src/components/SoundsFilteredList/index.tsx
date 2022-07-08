import {List} from "../List";
import {createMemo, For} from "solid-js";
import {searchSounds} from "../../data/soundsDb";
import {Player} from "../Player";
import styles from './index.module.css';

export type SoundsFilteredListProps = {
  query: string;
};
export const SoundsFilteredList = (props: SoundsFilteredListProps) => {
  const sounds = createMemo(() => searchSounds({ query: props.query }));

  return (
    <List class={styles.margin}>
      <For each={sounds()}>
        {(sound) => <Player {...sound} />}
      </For>
    </List>
  )
};
