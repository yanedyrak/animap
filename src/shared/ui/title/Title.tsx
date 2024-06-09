import styles from "./Title.module.scss";
import img from "./img.png";
export const Title = () => {
  return (
    <p className={styles.title}>
      <div>
        <span>AniMap</span>
        <div></div>
      </div>
      Watch anime online for free
    </p>
  );
};
