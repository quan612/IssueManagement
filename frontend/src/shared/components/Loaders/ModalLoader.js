import React from "react";
import ContentLoader from "react-content-loader";

const ModalLoader = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 1024 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#cecccc"
    style={{ width: "100%", height: "100%" }}
  >
    <rect x="27" y="30" rx="0" ry="0" width="113" height="30" />
    <rect x="27" y="80" rx="0" ry="0" width="900" height="30" />

    <rect x="27" y="130" rx="0" ry="0" width="113" height="30" />
    <rect x="27" y="180" rx="0" ry="0" width="700" height="100" />

    <circle cx="62" cy="344" r="36" />
    <rect x="109" y="313" rx="0" ry="0" width="620" height="67" />

    <rect x="27" y="417" rx="0" ry="0" width="700" height="380" />

    {/* right side */}
    <rect x="780" y="180" rx="0" ry="0" width="83" height="30" />
    <rect x="780" y="230" rx="0" ry="0" width="191" height="30" />

    <rect x="780" y="280" rx="0" ry="0" width="83" height="30" />
    <rect x="780" y="330" rx="0" ry="0" width="191" height="30" />

    <rect x="780" y="380" rx="0" ry="0" width="83" height="30" />
    <rect x="780" y="430" rx="0" ry="0" width="191" height="30" />

    <rect x="780" y="480" rx="0" ry="0" width="83" height="30" />
    <rect x="780" y="530" rx="0" ry="0" width="191" height="30" />
  </ContentLoader>
);

export default ModalLoader;
