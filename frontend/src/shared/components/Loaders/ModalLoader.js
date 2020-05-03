import React from "react";
import ContentLoader from "react-content-loader";

const ModalLoader = () => (
  <ContentLoader
    speed={2}
    width={1024}
    height={700}
    viewBox="0 0 1024 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#cecccc"
  >
    <rect x="25" y="166" rx="0" ry="0" width="609" height="100" />
    <rect x="26" y="71" rx="0" ry="0" width="857" height="30" />
    <rect x="25" y="128" rx="0" ry="0" width="113" height="20" />
    <rect x="696" y="169" rx="0" ry="0" width="83" height="22" />
    <rect x="694" y="295" rx="0" ry="0" width="191" height="25" />
    <circle cx="62" cy="344" r="36" />
    <rect x="109" y="313" rx="0" ry="0" width="528" height="67" />
    <rect x="25" y="417" rx="0" ry="0" width="615" height="222" />
    <rect x="698" y="255" rx="0" ry="0" width="83" height="22" />
    <rect x="697" y="381" rx="0" ry="0" width="191" height="25" />
    <rect x="697" y="340" rx="0" ry="0" width="83" height="22" />
    <rect x="696" y="208" rx="0" ry="0" width="191" height="25" />
    <rect x="698" y="424" rx="0" ry="0" width="83" height="22" />
    <rect x="701" y="485" rx="0" ry="0" width="191" height="25" />
    <rect x="27" y="31" rx="0" ry="0" width="113" height="20" />
  </ContentLoader>
);

export default ModalLoader;
