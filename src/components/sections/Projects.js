import React from "react";
import styled from "styled-components";
import Icon from "../icons/icon";
import { projects } from "../../config";

const ProjectsContainer = styled.section`
  max-width: var(--max-width);
  margin: auto;

  h2 {
    color: var(--darker-white);
    font-size: clamp(26px, 5vw, var(--fs-heading));
    margin-bottom: 60px;
    :after {
      content: "";
      display: block;
      position: relative;
      top: -20px;
      left: 180px;
      width: 350px;
      height: 3px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
    }
  }

  @media (max-width: 1000px) {
    padding: 30px 0;
    h2 {
      :after {
        width: calc(100vw - 50vw);
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      :after {
        width: calc(100vw - 60vw);
        margin-left: -20px;
      }
    }
  }

  @media (max-width: 420px) {
    h2 {
      :after {
        margin-left: -40px;
      }
    }
  }
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  height: 450px;
  margin-bottom: 100px;

  :last-child {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImg = styled.a`
  grid-column: 6/-1;
  grid-row: 1/2;
  ${({ alignRight }) => alignRight && "grid-column: 1/6;"}
  overflow: hidden;
  border-radius: var(--border-radius);
  transition: var(--transition-ease);
  opacity: 0.4;
  :hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    grid-column: 5/-1;
    ${({ alignRight }) => alignRight && "grid-column: 1/7;"}
  }
`;

const ProjectDescriptionContainer = styled.div`
  height: 80%;
  margin: auto 0;
  grid-column: 2/7;
  grid-row: 1/2;
  ${({ alignRight }) => alignRight && "text-align:right; grid-column: 5/-2;"}
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    grid-column: 1/8;
    ${({ alignRight }) => alignRight && "text-align:right; grid-column: 4/-1;"}
  }

  @media (max-width: 600px) {
    z-index: 2;
    height: 100%;
    padding: 1rem;
    background-color: var(--slight-navy);
    opacity: 0.8;
    border: 5px solid var(--navy-shadow);
  }

  h3 > a {
    color: var(--darker-white);
    font-size: var(--fs-xxl);
    font-weight: 700;
    text-decoration: none;
    transition: var(--transition-ease-faster);

    :hover {
      color: var(--title);
    }
  }

  > p {
    z-index: 2;
    color: var(--darkest-white);
    background-color: var(--light-navy);
    padding: 1rem 2rem;
    border-radius: var(--border-radius);

    @media (max-width: 600px) {
      background-color: transparent;
      padding: 0;
    }
  }

  > ul {
    list-style-type: none;
    display: flex;
    margin-left: -7px;
    ${({ alignRight }) =>
      alignRight && "justify-content: right; margin-right: -7px;"}

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }

    li {
      z-index: 2;
      font-family: var(--font-mono);
      margin: 0 5px;
      padding: 2px 4px;
      border-radius: var(--border-radius);
      background-color: var(--lightest-navy);
      color: var(--title);
      white-space: nowrap;
      transition: var(--transition-ease);

      :hover {
        background-color: var(--tint);
      }

      @media (max-width: 768px) {
        margin: 5px;
      }
    }
  }

  > div {
    width: 100%;
    ${({ alignRight }) =>
      alignRight ? "margin-left: 10px;" : "margin-left: -10px;"}
  }

  > div > a {
    color: var(--darkest-white);
    padding: 10px;
    :nth-child(1) {
      margin-right: 20px;
    }

    svg {
      transition: var(--transition-ease);
      width: 20px;
      height: 20px;

      :hover {
        transform: scale(1.2);
      }
    }
  }
`;

const Project = ({
  project: {
    name,
    screenshot,
    description,
    tech,
    url: { live, github },
  },
  index,
}) => {
  return (
    <ProjectContainer>
      {index % 2 ? (
        <>
          <ProjectDescriptionContainer alignRight={false}>
            <h3>
              <a href="/">{name}</a>
            </h3>
            <p>{description}</p>
            <ul>
              {tech.map((tech, i) => (
                <li key={tech[i]}>{tech}</li>
              ))}
            </ul>
            <div>
              <a target="_blank" rel="noopener noreferrer" href={github}>
                <Icon name="GitHub" />
              </a>
              <a href="/">
                <Icon name="Live Site" />
              </a>
            </div>
          </ProjectDescriptionContainer>
          <ProjectImg
            alignRight={false}
            target="_blank"
            rel="noopener noreferrer"
            href={github}
          >
            <img src={screenshot} alt={`${name} project demo`} />
          </ProjectImg>
        </>
      ) : (
        <>
          <ProjectImg
            alignRight={true}
            target="_blank"
            rel="noopener noreferrer"
            href={github}
          >
            <img src={screenshot} alt={`${name} project demo`} />
          </ProjectImg>
          <ProjectDescriptionContainer alignRight={true}>
            <h3>
              <a href="/">{name}</a>
            </h3>
            <p>{description}</p>
            <ul>
              {tech.map((tech, i) => (
                <li key={tech[i]}>{tech}</li>
              ))}
            </ul>
            <div>
              <a target="_blank" rel="noopener noreferrer" href={github}>
                <Icon name="GitHub" />
              </a>
              <a href="/">
                <Icon name="Live Site" />
              </a>
            </div>
          </ProjectDescriptionContainer>
        </>
      )}
    </ProjectContainer>
  );
};

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <div>
        {projects.map((project, i) => (
          <Project key={project.name} project={project} index={i} />
        ))}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
