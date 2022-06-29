import { v4 as uuidv4 } from "uuid";

import HeroSVGBackdrop from "../../svgs/hero-backdrop";
import { WordRiseAnim } from "../../animations/word-rise";
import styles from "./index.module.css";

const Hero_Words = ["Anthony", "Liang", "FullStack", "Developer"];

const Hero = () => {
  return (
    <div id={styles.hero}>
      <div className={styles.content}>
        {Hero_Words.map((word, idx) => {
          return (
            <div
              className={styles.word}
              style={{ "--padd": `${idx * 0.5}ch` }}
              key={uuidv4()}
            >
              <WordRiseAnim
                text={word}
                delayMS={250 * (idx + 1)}
                durationMS={450}
              />
              <br />
            </div>
          );
        })}
      </div>

      <div className={styles.backdrop}>
        <HeroSVGBackdrop
          width="clamp(35rem, 100vw, 80rem)"
          height="clamp(21.875rem, 62.5vw, 50rem)"
        />
      </div>
    </div>
  );
};

export default Hero;
