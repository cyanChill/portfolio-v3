import styles from "./index.module.css";

const SVGLogo = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="logo">
        <g className={`${styles.cube} ${styles.cubeTop}`}>
          <path d="M30.5302 19.705L50 8.4641L69.4699 19.705V42.1869L50 53.4278L30.5302 42.1869V19.705Z" />
          <path d="M33.4962 18.0049L50 8.46513L66.5039 18.0049L50 27.7832L33.4962 18.0049Z" />
          <line className={styles.line} x1="50" y1="50.6216" x2="50" y2="25" />
        </g>
        <g className={`${styles.cube} ${styles.cubeBottomLeft}`}>
          <path d="M11.4761 53.705L30.9459 42.4641L50.4158 53.705V76.1869L30.9459 87.4278L11.4761 76.1869V53.705Z" />
          <path d="M14.4421 52.0049L30.946 42.4651L47.4498 52.0049L30.946 61.7832L14.4421 52.0049Z" />
          <line
            className={styles.line}
            x1="30.9459"
            y1="84.6216"
            x2="30.9459"
            y2="59"
          />
        </g>
        <g className={`${styles.cube} ${styles.cubeBottomRight}`}>
          <path d="M49.4761 53.705L68.9459 42.4641L88.4158 53.705V76.1869L68.9459 87.4278L49.4761 76.1869V53.705Z" />
          <path d="M52.4421 52.0049L68.946 42.4651L85.4498 52.0049L68.946 61.7832L52.4421 52.0049Z" />
          <line
            className={styles.line}
            x1="68.9459"
            y1="84.6216"
            x2="68.9459"
            y2="59"
          />
        </g>
      </g>
    </svg>
  );
};

export const AnimatedLogoOnLoad = ({ width = 50, height = 50 }) => {
  return (
    <div className={`${styles.svg} ${styles.onLoad}`}>
      <SVGLogo width={width} height={height} />
    </div>
  );
};
