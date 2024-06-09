import { Card } from "../../entities/card/Card";
import { useGetTrendingQuery } from "../../shared/api/trending.api";
import { TitleT } from "../../shared/types";
import styles from "./Trending.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skeleton from "../../shared/ui/skeleton/Skeleton";
export const Trending = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1824 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1823, min: 1126 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 1125, min: 830 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 830, min: 0 },
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
      {isLoading && (
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={2000}
          infinite
          keyBoardControl
          arrows={false}
          className={styles.carousel}
        >
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} />
            ))}
        </Carousel>
      )}
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
        keyBoardControl
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
