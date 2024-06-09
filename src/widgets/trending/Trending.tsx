import { Card } from "../../entities/card/Card";
import { useGetTrendingQuery } from "../../shared/api/trending.api";
import { TitleT } from "../../shared/types";

import styles from "./Trending.module.scss";
export const Trending = () => {
  const { data = [], isLoading } = useGetTrendingQuery({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>Trending</p>
      {isLoading && <p>Loading...</p>}
      <div className={styles.cards}>
        {data.map((title: TitleT, index: number) => (
          <Card key={index} title={title} />
        ))}
      </div>
      <button>See more </button>
    </div>
  );
};
