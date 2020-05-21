import React from "react";
import ContentLoader from "react-content-loader";

const IssuesLoader = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 950 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#cecccc"
      style={{ width: "100%", height: "100%" }}
    >
      <rect x="0" y="55" rx="21" ry="21" width="200" height="700" />
      <rect x="230" y="55" rx="21" ry="21" width="200" height="700" />
      <rect x="460" y="55" rx="21" ry="21" width="200" height="700" />
      <rect x="690" y="55" rx="21" ry="21" width="200" height="700" />
    </ContentLoader>
  );
};

export default IssuesLoader;
