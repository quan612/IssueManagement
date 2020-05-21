import React from "react";
import { useTransition, animated } from "react-spring";
import UpdatableProject from "../Item/UpdatableProject";

const ProjectList = ({ projects }) => {
  const transitions = useTransition(projects, (item) => item.id, {
    from: { opacity: 0, transform: "translate3d(-80%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-80%,0,0)" },
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <UpdatableProject data={item} />
        </animated.div>
      ))}
    </>
  );
};

export default ProjectList;
