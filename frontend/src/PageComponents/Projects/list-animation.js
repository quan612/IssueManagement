import React from "react";
import { useTrail, animated } from "react-spring";
import { Link } from "react-router-dom";
import DeleteProject from "./DeleteProject";

const ListAnimation = ({ projects }) => {
  const trail = useTrail(projects.length, {
    from: {
      marginLeft: -60,
      opacity: 0,
      transform: "translate3d(-80, 0, 0)"
    },
    to: { marginLeft: 0, opacity: 1, transform: "translate3d(0, 0px, 0)" },
    delay: 200,
    config: { duration: 550 }
  });

  return (
    <>
      {trail.map((props, index) => {
        return (
          <animated.div
            className="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pr-2 "
            style={props}
            key={projects[index].id}
          >
            <Link to={`/projects/${projects[index].id}`}>
              <div className="bg-blue-600  border rounded shadow p-2 flex fle-row items-center">
                <div className="w-full h-12 my-1">
                  <h3 className="text-white text-3xl">
                    {projects[index].name}
                  </h3>
                  <span className="text-white ">
                    {projects[index].description}
                  </span>
                </div>
              </div>
            </Link>
            <DeleteProject id={projects[index].id} />
          </animated.div>
        );
      })}
    </>
  );
};

export default ListAnimation;
