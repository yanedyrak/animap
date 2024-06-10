import ContentLoader from "react-content-loader";

const SkeletonAnnounce = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 635 70"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{
      borderRadius: "250px",
      marginBottom: "30px",
      padding: "20px 100px 20px 100px",
    }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="635" height="70" />
  </ContentLoader>
);

export default SkeletonAnnounce;
