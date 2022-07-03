import styles from "./index.module.css";

const DragIndicator = ({ width = 100, height = 20, duration = 10 }) => {
  const svgCirclesPath = [...Array(26)].map((_, idx) => (
    <circle key={idx} cx={`${10.5 + 3 * idx}`} cy="9.5" r="0.5" />
  ));

  return (
    <svg
      style={{ "--animationDuration": `${duration}s` }}
      className={styles.svg}
      width={width}
      height={height}
      viewBox="0 0 100 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.linePath}>{svgCirclesPath}</g>
      <rect className={styles.rect} x="5" y="5" width="84" height="9" />

      <path
        className={styles.hand}
        d="M13.5 5.5625C13.4168 5.5625 13.3352 5.56887 13.2556 5.58115C13.0559 5.02432 12.4938 4.62197 11.8333 4.62197C11.6988 4.62197 11.5683 4.63868 11.4442 4.66996C11.1792 4.26816 10.7063 4 10.1667 4C9.62708 4 9.15208 4.26934 8.8875 4.67266C8.76458 4.6416 8.63542 4.625 8.50208 4.625C7.675 4.625 7.00021 5.25586 7.00021 6.03125V8.40625C6.89104 8.38672 6.77938 8.375 6.66688 8.375C6.66682 8.375 6.66693 8.375 6.66688 8.375C5.75896 8.375 5 9.0625 5 9.93945C5 10.3357 5.15746 10.7113 5.44708 11.0029L7.13979 12.7068C7.95625 13.5293 9.1125 14 10.3104 14H10.9996C13.2063 14 15 12.3184 15 10.25V6.96875C15 6.19336 14.3271 5.5625 13.5 5.5625ZM14 10.25C14 11.801 12.6544 13.0625 11.0188 13.0625H10.3104C9.38521 13.0625 8.50146 12.702 7.87083 12.0672L6.20917 10.3947C6.07996 10.2647 6.01321 10.0939 6.01321 9.94355C6.01321 9.51074 6.39925 9.33027 6.66633 9.33027C6.84467 9.33027 7.02258 9.39699 7.15425 9.5291L7.71092 10.0895C7.74583 10.1074 7.78958 10.1211 7.83125 10.1211C7.91679 10.1211 7.99925 10.0591 7.99925 9.96453V6.03125C7.99925 5.77246 8.22321 5.5625 8.4805 5.5625C8.75654 5.5625 8.96175 5.77246 8.96175 6.03125V9C9 9.17188 9.15 9.3125 9.33333 9.3125C9.51667 9.3125 9.64792 9.1726 9.64792 9.01758L9.66667 5.40625C9.66667 5.14746 9.89063 4.9375 10.1479 4.9375C10.424 4.9375 10.6292 5.14746 10.6292 5.40625V9C10.6667 9.17188 10.8167 9.3125 11 9.3125C11.1833 9.3125 11.3331 9.17258 11.3331 9.01758L11.3333 6.04492C11.3333 5.78613 11.5572 5.57617 11.8145 5.57617C12.0906 5.57617 12.2958 5.78613 12.2958 6.04492V9.01758C12.3333 9.17187 12.4833 9.3125 12.6667 9.3125C12.85 9.3125 12.9813 9.1726 12.9813 9.01758V6.96875C12.9813 6.70996 13.2052 6.5 13.4625 6.5C13.7385 6.5 13.9438 6.70996 13.9438 6.96875V10.25H14Z"
      />
      <path
        className={styles.grab}
        d="M13.2957 5.3291C12.9904 4.98926 12.4928 4.78125 11.9519 4.78125H11.6267C11.5421 4.78125 11.4575 4.78663 11.3736 4.79723C11.0769 4.61191 10.7115 4.50781 10.3245 4.50781H10C9.9044 4.50781 9.81 4.51502 9.71755 4.52898C9.4399 4.20918 8.98077 4 8.46154 4H8.07692C7.22837 4 6.53846 4.55957 6.53846 5.25V6.2209L5.74615 6.79883C5.27163 7.125 5 7.60547 5 8.11914V9.66152C5 10.2885 5.4113 10.8656 6.07332 11.1678L6.92308 11.5566V13.5313C6.92308 13.791 7.18029 14 7.47837 14C7.77644 14 8.07692 13.791 8.07692 13.5313V10.9941C8.04529 10.9814 8.01022 10.9762 7.97928 10.9621L6.63841 10.35C6.33942 10.2148 6.15385 9.94922 6.15385 9.66211V8.11914C6.15385 7.87871 6.28079 7.65488 6.5024 7.50605L6.92308 7.19922V8.0625C6.92308 8.23438 7.09615 8.375 7.30769 8.375C7.51923 8.375 7.69231 8.23523 7.69231 8.0625V5.25C7.69231 5.07758 7.8651 4.9375 8.07692 4.9375H8.46154C8.67308 4.9375 8.84615 5.07754 8.84615 5.25V5.5625C8.84615 5.74957 9.03707 5.87578 9.23437 5.87578C9.38899 5.87578 9.53029 5.7973 9.58846 5.67715C9.59856 5.65703 9.71875 5.44531 10 5.44531H10.3252C10.8293 5.44531 10.756 5.82773 11.149 5.82773C11.3456 5.82773 11.387 5.71867 11.6269 5.71867H11.9522C12.5661 5.71867 12.3913 6.27004 12.8815 6.27004C12.8852 6.27004 12.889 6.27 12.8927 6.26989L13.2548 6.26563C13.5601 6.26563 13.8462 6.49414 13.8462 6.77344V9.3125C13.8462 10.0186 13.3764 10.6273 12.6923 10.9471V13.5311C12.6923 13.791 12.9495 14 13.2476 14C13.5457 14 13.8462 13.791 13.8462 13.5313V11.4199C14.5697 10.8906 15 10.125 15 9.3125V6.77344C15 5.99414 14.25 5.35625 13.2957 5.3291Z"
      />
    </svg>
  );
};

export default DragIndicator;
