import React, { useState, useEffect } from "react";

import { UseTrailAnimation } from "shared/animations/UseTrailAnimation";
import UpdatableProject from "./UpdatableProject";

import { ItemContainer } from "./styles";

import { Button } from "shared/components/Button";

import { useTransition, animated } from "react-spring";

import { useLocation } from "react-router-dom";

const ProjectList = ({ projects }) => {
  // const transitions = useTransition(items, (item) => item.id, {
  //   from: { opacity: 0, transform: "translate3d(-80%, 0, 0)" },
  //   enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
  //   leave: { opacity: 0, transform: "translate3d(-80%,0,0)" },
  // });
  const location = useLocation();
  const currentHref = location.pathname;

  // console.log(location);
  const [isActive, setActive] = useState(false);

  const handleOverlay = () => {
    window.history.pushState({}, null, currentHref);
    setActive(!isActive);
  };

  const handleOnSetActive = (id) => {
    // console.log(id);
    window.history.pushState({}, null, location.pathname + "/" + id);

    setActive(!isActive);
  };

  return projects.map((project) => (
    <ItemContainer key={project.id}>
      <UpdatableProject
        data={project}
        onSetActive={(id) => handleOnSetActive(id)}
      />
    </ItemContainer>
  ));

  // return transitions.map(
  //   ({ item, props, key }) =>
  //     item && (
  //       <animated.div
  //         className="w-1/3 md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2"
  //         key={key}
  //         style={props}
  //       >
  //         <UpdatableProject data={item} />
  //       </animated.div>
  //     )
  // );
};

export default ProjectList;
