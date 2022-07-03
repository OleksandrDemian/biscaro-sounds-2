export const AudioManager = (() => {
  let audio: HTMLAudioElement | null = null;
  
  const play = (audioPath: string) => {
    if (audio) {
      audio.remove();
    }

    audio = new Audio(audioPath);
    audio.play();
  }

  return {
    play,
  };
})();