import ContentLoader from "react-content-loader";

const SkeletonLinks = ({
  width = "160px",
  height = "60px",
}: {
  width?: string;
  height?: string;
}) => (
  <ContentLoader
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{
      zIndex: "3",
      width: `${width}`,
      height: `${height}`,
      borderRadius: "30px",
    }}
  >
    <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
  </ContentLoader>
);

export default SkeletonLinks;
