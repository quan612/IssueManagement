import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import * as ROUTES from "../../routes";
import * as PAGES from "../../pages";

import gql from "graphql-tag";
import styled from "styled-components";

const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    projects {
      id
      name
      description
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);

  if (data) {
    console.log("test", data.projects);
  }

  return (
    <>
      <ul>
        {data &&
          data.projects.map(project => {
            return (
              <li key={project.id}>
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Projects;
