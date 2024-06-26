import ContentLoader from "react-content-loader";

const Skeleton = ({
  width = "300px",
  height = "400px",
}: {
  width?: string;
  height?: string;
}) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ borderRadius: "40px" }}
  >
    <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
  </ContentLoader>
);

export default Skeleton;
