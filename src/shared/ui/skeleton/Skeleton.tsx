import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ borderRadius: "40px" }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="400" />
  </ContentLoader>
);

export default MyLoader;
