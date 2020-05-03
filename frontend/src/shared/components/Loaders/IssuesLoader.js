import React from "react";
import ContentLoader from "react-content-loader";

const IssuesLoader = () => (
  <ContentLoader
    speed={2}
    width={950}
    height={950}
    viewBox="0 0 950 950"
    backgroundColor="#f3f3f3"
    foregroundColor="#cecccc"
  >
    <rect x="10" y="55" rx="21" ry="21" width="210" height="702" />
    <rect x="240" y="54" rx="21" ry="21" width="210" height="702" />
    <rect x="460" y="56" rx="21" ry="21" width="210" height="702" />
    <rect x="700" y="52" rx="21" ry="21" width="210" height="702" />
  </ContentLoader>
);

export default IssuesLoader;
