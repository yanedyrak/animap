import { Card } from "../../entities/card/Card";
import { useGetTrendingQuery } from "../../shared/api/trending.api";
import { TitleT } from "../../shared/types";
import styles from "./Trending.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Trending = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1824 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1823, min: 1024 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { data = [], isLoading } = useGetTrendingQuery({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>Trending</p>
      {isLoading && <p>Loading...</p>}
      <Carousel
        responsive={responsive}
        autoPlay
        arrows={false}
        className={styles.carousel}
      >
        {data.map((title: TitleT, index: number) => (
          <Card key={index} title={title} />
        ))}
      </Carousel>
      <button>See more </button>
    </div>
  );
};
