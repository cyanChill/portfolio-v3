import { v4 as uuidv4 } from "uuid";

import HeroSVGBackdrop from "../../svgs/animated/hero-backdrop";
import { WordRiseAnim } from "../../animations/word-rise";
import styles from "./index.module.css";

const Hero_Words = ["Anthony", "Liang", "FullStack", "Developer"];

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.content}>
        {Hero_Words.map((word, idx) => {
          return (
            <div
              className={styles.word}
              style={{ "--padd": `${idx * 0.5}ch` }}
              key={uuidv4()}
            >
              <WordRiseAnim delayMS={250 * (idx + 1)} durationMS={450}>
                {word}
              </WordRiseAnim>
            </div>
          );
        })}
      </h1>

      <div className={styles.backdrop}>
        <HeroSVGBackdrop
          width="clamp(40rem, 100vw, 80rem)"
          height="clamp(20rem, 50vw, 40rem)"
        />
      </div>
    </section>
  );
};

export default Hero;
