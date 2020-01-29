import React from "react";
import { Link } from "react-router-dom";

import { useTrail, animated } from "react-spring";
import withProjectsQuery from "../HOC/withProjectsQuery";

const Projects = ({ error, projects }) => {
  const trail = useTrail(projects.length, {
    from: {
      marginLeft: -20,
      opacity: 0,
      transform: "translate3d(-30, 0, 0)"
    },
    to: { marginLeft: 40, opacity: 1, transform: "translate3d(0, 0px, 0)" },
    delay: 300,
    config: { duration: 500 }
  });

  return (
    <>
      <div className="flex flex-col mb-4 items-center">
        {trail.map((props, index) => {
          return (
            <animated.div
              className="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pr-2 "
              style={props}
              key={projects[index].id}
            >
              <Link to={`/projects/${projects[index].id}`}>
                <div className="bg-blue-600  border rounded shadow p-2 flex fle-row items-center">
                  <div className="w-full  h-12 my-2">
                    <h3 className="text-white text-3xl">
                      {projects[index].name}
                    </h3>
                    <span className="text-white >{project.name}">
                      {projects[index].description}
                    </span>
                  </div>
                </div>
              </Link>
            </animated.div>
          );
        })}
      </div>
    </>
  );
};

export default withProjectsQuery(Projects);
