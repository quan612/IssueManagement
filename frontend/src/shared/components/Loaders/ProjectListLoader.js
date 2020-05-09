import React from "react";
// import ContentLoader from "react-content-loader";
import Spinner from "shared/components/Spinner";

const ProjectListLoader = () => (
  // <ContentLoader
  //   speed={2}
  //   width={800}
  //   height={800}
  //   viewBox="0 0 800 800"
  //   backgroundColor="#f3f3f3"
  //   foregroundColor="#cecccc"
  // >
  //   <rect x="80" y="2" rx="0" ry="0" width="600" height="20" />
  //   <rect x="80" y="40" rx="3" ry="3" width="600" height="120" />
  //   <rect x="80" y="180" rx="3" ry="3" width="600" height="120" />
  //   <rect x="80" y="320" rx="3" ry="3" width="600" height="120" />
  //   <rect x="80" y="460" rx="3" ry="3" width="600" height="120" />
  // </ContentLoader>
  <Spinner color="#4C0386" size={50} />
);

export default ProjectListLoader;
