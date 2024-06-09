import styles from "./Card.module.scss";
export const Card = ({ title, amount }: { title: string; amount: number }) => {
  return (
    <div className={styles.container}>
      <img src="" alt="" />
      <p className={styles.title}>{title}</p>
      <p>
        {amount}
        {amount > 1 ? " episodes" : " episode"}
      </p>
    </div>
  );
};
